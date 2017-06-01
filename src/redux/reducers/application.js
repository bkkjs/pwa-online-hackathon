import { constantCreator } from '../constantCreator';
const constant = constantCreator('application');
const LOGIN_WITH_GITHUB = constant('LOGIN_WITH_GITHUB', true);
const SUBMIT_APPLICATION = constant('SUBMIT_APPLICATION', true);
const GET_APPLICATION = constant('GET_APPLICATION', true)
import * as firebase from 'firebase';

const initialState = {
  loginPending: false,
  loggedIn: false,
  submitPending: false,
  submitted: false,
  githubUser: {},
};

// initialState.application = { teamCount: 1, key: '-KlUN_IcXSO5CmooBM_Y', teamName: 'panj', shippingAddress: 'a', githubRepoUrl: 'gituhb', firebaseProjectId: 'firebase' };
// initialState.submitted = true;
// initialState.loggedIn = true;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_WITH_GITHUB.PENDING:
      return {
        ...state,
        loginPending: true,
      };
    case LOGIN_WITH_GITHUB.RESOLVED:
      window.scrollTo(0, 0);
      return {
        ...state,
        loginPending: false,
        loggedIn: true,
        githubUser: action.data,
      };
    case SUBMIT_APPLICATION.PENDING:
      return {
        ...state,
        submitPending: true,
      };
    case SUBMIT_APPLICATION.RESOLVED:
      window.scrollTo(0, 0);
      return {
        ...state,
        submitPending: false,
        submitted: true,
        application: action.data,
      };
    case GET_APPLICATION.RESOLVED:
      window.scrollTo(0, 0);
      const application = action.data;
      const uid = state.githubUser.uid;
      const submitted = (uid === application.uid) ||
        Object.keys(application.members || {}).filter((key) => application.members[key].uid === uid).length > 0;
      return {
        ...state,
        application,
        submitted,
      }
    default: return state;
  }
};

export default reducer;

export const actions = {
  loginWithGithub: () => {
    const provider = new firebase.auth.GithubAuthProvider();
    return {
      type: LOGIN_WITH_GITHUB,
      promise: firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        return { data: result.user };
      })
    };
  },
  submit: (data) => {
    const ref = firebase.database().ref(`applications`).push();
    const promise = ref
    .set({ ...data, timestamp: firebase.database.ServerValue.TIMESTAMP })
    .then(() => ({ data: { ...data, key: ref.key } }));
    return {
      type: SUBMIT_APPLICATION,
      promise,
    };
  },
  submitTeamMember: (data) => {
    const ref = firebase.database().ref(`applications/${data.key}/members`).push();
    const promise = ref
    .set({ ...data, timestamp: firebase.database.ServerValue.TIMESTAMP })
    .then(() => ({ data }));
    return {
      type: SUBMIT_APPLICATION,
      promise,
    };
  },
  getApplication: (key) => {
    const ref = firebase.database().ref(`applications/${key}`);
    const promise = ref.once('value')
      .then((snapshot) => ({ data: { key, ...snapshot.val() }}));
    return {
      type: GET_APPLICATION,
      promise,
    };
  }
};
