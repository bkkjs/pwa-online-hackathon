import { constantCreator } from '../constantCreator';
const constant = constantCreator('application');
const LOGIN_WITH_GITHUB = constant('LOGIN_WITH_GITHUB', true);
const SUBMIT_APPLICATION = constant('SUBMIT_APPLICATION', true);
const SUBMIT_TEAM_MEMBER = constant('SUBMIT_TEAM_MEMBER', true);
const GET_APPLICATION = constant('GET_APPLICATION', true);
const LOGGED_IN = constant('LOGGED_IN');
const LOGGED_OUT = constant('LOGGED_OUT');
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
    case LOGGED_IN:
      return {
        ...state,
        loginPending: false,
        loggedIn: !!action.data,
        githubUser: action.data || {},
      }
    case LOGGED_OUT:
      return {
        ...state,
        loggedIn: false,
        githubUser: null,
      }
    case LOGIN_WITH_GITHUB.PENDING:
      return {
        ...state,
        loginPending: true,
      };
    case LOGIN_WITH_GITHUB.REJECTED:
      return {
        ...state,
        loginPending: false,
      }
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
    case SUBMIT_TEAM_MEMBER.PENDING:
      return {
        ...state,
        submitPending: true,
      };
    case SUBMIT_TEAM_MEMBER.RESOLVED:
      window.scrollTo(0, 0);
      return {
        ...state,
        submitPending: false,
        submitted: true,
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
  login: (data) => ({ type: LOGGED_IN, data }),
  logout: () => ({ type: LOGGED_OUT }),
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
    const { firstName, lastName, tshirtSize, mobile, optIn, photoURL, email, uid } = data;
    const cleanedData = { firstName, lastName, tshirtSize, mobile, optIn, photoURL, email, uid };
    const promise = ref
    .set({ ...cleanedData, timestamp: firebase.database.ServerValue.TIMESTAMP })
    .then(() => ({ data }));
    return {
      type: SUBMIT_TEAM_MEMBER,
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
