// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const cleanMember = (member) => {
  const { firstName, lastName, tshirtSize, mobile, optIn, photoURL, timestamp, email, uid } = member;
	return { firstName, lastName, tshirtSize, mobile, optIn, photoURL, timestamp, email, uid };
}

exports.applicationChanged = functions.database.ref('/applications/{applicationId}')
  .onWrite((event) => {
    let promises = [];
    const applicationId = event.params.applicationId;
    if (!event.data.exists()) {
      return;
    }
    const data = event.data.val();
    const members = [data.uid];
    const memberIndex = {};
    memberIndex[data.uid] = 0;
    if (data.members) {
      Object.keys(data.members).map((key) => {
        data.members[key] = cleanMember(data.members[key]);
        members.push(data.members[key].uid);
        memberIndex[data.members[key].uid] = key;
        return false;
      });
    }
    data.teamCountCurrent = 1 + (data.members ? Object.keys(data.members).length : 0);
    const cleanedData = JSON.parse(JSON.stringify(data))
    promises.push(event.data.ref.set(cleanedData));
    console.log('Saving members');
    cleanedData.applicationId = applicationId;
    promises = promises.concat(members.map((member) =>
      event.data.ref.root.child(`users/${member}`).set(cleanedData)
    ));
    console.log('Saving publicApplications');
    promises.push(event.data.ref.root.child(`publicApplications/${applicationId}/firebaseProjectId`).set(cleanedData.firebaseProjectId));
    promises.push(event.data.ref.root.child(`publicApplications/${applicationId}/githubRepoUrl`).set(cleanedData.githubRepoUrl));
    promises.push(event.data.ref.root.child(`publicApplications/${applicationId}/teamCount`).set(cleanedData.teamCountCurrent));
    promises.push(event.data.ref.root.child(`publicApplications/${applicationId}/teamName`).set(cleanedData.teamName));
    if (cleanedData.leaderboardMessage)
      promises.push(event.data.ref.root.child(`publicApplications/${applicationId}/leaderboardMessage`).set(cleanedData.leaderboardMessage));
    if (cleanedData.formSubmittedAt)
      promises.push(event.data.ref.root.child(`publicApplications/${applicationId}/formSubmittedAt`).set(cleanedData.formSubmittedAt));
    promises.push(event.data.ref.root.child('/applications').once('value')
    .then((applicationsSnapshot) => {
      const applications = applicationsSnapshot.val();
      const totalTeam = Object.keys(applications).length;
      let totalApplicant = 0;
      Object.keys(applications).map((key) => {
        const application = applications[key];
        totalApplicant += application.teamCountCurrent;
        return false;
      });
      return Promise.all([
        event.data.ref.root.child(`publicMeta/totalApplicant`).set(totalApplicant),
        event.data.ref.root.child(`publicMeta/totalTeam`).set(totalTeam),
      ]);
    }));
    console.log('Saved');
    return Promise.all(promises);
  });

exports.rankingChanged = functions.database.ref('/publicApplications/{applicationId}')
  .onWrite((event) => {
    const committedAtRef = event.data.child('committedAt');
    const deployedAtRef = event.data.child('deployedAt');
    const formSubmittedAtRef = event.data.child('formSubmittedAt');
    const offlineSupportedRef = event.data.child('offlineSupported');
    const manifestSupportedRef = event.data.child('manifestSupported');
    if (!committedAtRef.changed() &&
      !deployedAtRef.changed() &&
      !formSubmittedAtRef.changed() &&
      !offlineSupportedRef.changed() &&
      !manifestSupportedRef.changed()
    ) {
      return;
    }
    return event.data.ref.root.child('/publicApplications').once('value')
    .then((applicationsSnapshot) => {
      const applications = applicationsSnapshot.val();
      const rankings = [];
      Object.keys(applications).map((key) => {
        const application = applications[key];
        const latest = Math.max(application.committedAt, application.deployedAt, application.formSubmittedAt);
        const completed = !!(application.committedAt && application.deployedAt && application.formSubmittedAt && application.offlineSupported && application.manifestSupported);
        const blank = !application.committedAt && !application.deployedAt && !application.formSubmittedAt;
        rankings.push({
          latest,
          completed,
          key,
          blank,
        });
        return false;
      });
      const promises = [];
      rankings.sort((a, b) => {
        if (a.completed !== b.completed) {
          return !a.completed;
        }
        return a.latest - b.latest;
      }).filter((a) => {
        if (a.blank) {
          promises.push(event.data.ref.root.child(`publicApplications/${a.key}/rank`).remove());
          return false;
        }
        return true
      }).map((sorted, index) => {
        promises.push(event.data.ref.root.child(`publicApplications/${sorted.key}/rank`).set(index + 1));
        if (sorted.completed)
          promises.push(event.data.ref.root.child(`publicApplications/${sorted.key}/completed`).set(true));
        else
          promises.push(event.data.ref.root.child(`publicApplications/${sorted.key}/completed`).set(false)); 
        return false;
      });
      return Promise.all(promises);
    });
  });