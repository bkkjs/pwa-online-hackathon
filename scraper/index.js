const admin = require("firebase-admin")
const serviceAccount = require("./serviceAccountKey.json")
const lighthouse = require('lighthouse')
const asyncLib = require('async')
const github = require('octonode')
const githubClient = github.client()
const chromeLauncher = require('lighthouse/chrome-launcher/chrome-launcher')
const Nightmare = require('nightmare')
const flags = {output: 'json'}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pwa-online-hackathon.firebaseio.com"
});
const database = admin.database()
const listProject = database.ref('publicApplications')

try {
  listProject.once('value', function(snapshot) {
    let projects = snapshot.val()  
    let projectsArray = Object.keys(projects).map((key) =>{
        projects[key].key = key
        return projects[key]
    })

    asyncLib.mapLimit(projectsArray, 4 , getLightHouseInfo, function (error, result) {
      // console.log(result)
    })

  })
} catch (e) {
  
}


function getLightHouseInfo(project, callback) {
  console.log('----------------------------------------')
  console.log('https://' + project.firebaseProjectId + '.firebaseapp.com/')
  console.log('/repos/' + project.githubRepoUrl.replace('https://github.com/','') + '/commits')
  console.log(project.key)
  console.log('----------------------------------------')
  launchChromeAndRunLighthouse('https://' + project.firebaseProjectId + '.firebaseapp.com/', flags).then(lighthouseData => {
  // launchChromeAndRunLighthouse('https://pwa.online.hackathon.in.th/', flags).then(lighthouseData => {
    let updateData = project
    updateData.lighthouseScore = lighthouseData.score
    updateData.manifestSupported = false
    updateData.offlineSupported = false
    updateData.committedAt = 0
    updateData.appName = ''
    updateData.appIcon = ''
    updateData.deployedAt = 0 

    if(lighthouseData.artifacts.Manifest !== null) {
      updateData.appName = lighthouseData.artifacts.Manifest.value.name.value
    }

    if(lighthouseData.artifacts.Manifest !== null) {
      updateData.appIcon = lighthouseData.artifacts.Manifest.value.icons.value[0].value.src.value
    }

    if (lighthouseData.artifacts.Manifest !== null) {
      updateData.manifestSupported = true
    }

    if (lighthouseData.artifacts.Offline === 200) {
      updateData.offlineSupported = true
    }
    
    githubClient.get('/repos/' + project.githubRepoUrl.replace('https://github.com/','') + '/commits', function (err, status, body, headers) {

      if(body) {
        if(body.message !== 'Git Repository is empty.') {
          let commitUnixtime = new Date(body[0].commit.author.date).getTime()
          updateData.committedAt = commitUnixtime / 1000
        }
      }
      ScrapFirebaseHosting(project.firebaseProjectId).then(result => {
        let deployedAt = new Date(String(result).replace(/<[^>]+>/g, '')).getTime()
        if(!isNaN(deployedAt)){
          updateData.deployedAt = deployedAt / 1000
        }else{
          updateData.deployedAt = 0     
        }
        let updates = {}
        updates['/publicApplications/' + project.key] = updateData
        console.log(updates)
        // database.ref().update(updates)
        callback(null, updateData)
      })
    })


  })
}

function launchChromeAndRunLighthouse(url, flags, config = null) {
  return chromeLauncher.launch().then(chrome => {
    flags.port = chrome.port;
    return lighthouse(url, flags, config).then(results =>
      chrome.kill().then(() => results)
    );
  });
}

async function ScrapFirebaseHosting(firebaseProjects) {
  const nightmareLogin = Nightmare({ show: true, dock: true, waitTimeout: 20000})
  try {
    return await nightmareLogin.goto('https://console.firebase.google.com/u/0/project/' + firebaseProjects + '/hosting/main')
    .type('#Email','pwaonlinehack@gmail.com')
    .click('#next')
    .wait('#Passwd')
    .type('#Passwd','1kxZGkSgPIudMamQgLLG#')
    .click('#signIn')
    .wait('table:nth-child(1) > tbody:nth-child(3) > tr > td.h5g-hist-time.fixed-col > div > ng-transclude')
    .end()
    .evaluate(function () {
          return document.querySelector('table:nth-child(1) > tbody:nth-child(3) > tr > td.h5g-hist-time.fixed-col > div > ng-transclude').innerHTML
    })
  } catch(e) {
    return e
  }
}
