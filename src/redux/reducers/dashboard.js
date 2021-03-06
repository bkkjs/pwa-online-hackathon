import { constantCreator } from '../constantCreator';
import * as firebase from 'firebase';
const constant = constantCreator('dashboard');
const SUBMIT_FORM = constant('SUBMIT_FORM', true);
const UPDATE_ANNOUNCEMENT = constant('UPDATE_ANNOUNCEMENT');
const SET_USER = constant('SET_USER');
const SET_APPLICATIONS = constant('SET_APPLICATIONS');
const SET_RANKINGS = constant('SET_RANKINGS');
const SET_LEADERBOARD = constant('SET_LEADERBOARD');
const SET_META = constant('SET_META');

const initialState = {
  announcement: '',
  publicApplications: {},
  publicRankings: [],
  showLeaderboard: false,
  meta: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ANNOUNCEMENT:
      return {
        ...state,
        announcement: action.data,
      }
    case SET_USER:
      return {
        ...state,
        user: action.data,
      }
    case SET_APPLICATIONS:
      return {
        ...state,
        publicApplications: action.data,
      }
    case SET_RANKINGS:
      return {
        ...state,
        publicRankings: Object.keys(action.data)
          .map((key) => {
            action.data[key].applicationId = key;
            return action.data[key];
          }).sort((a, b) => (a.rank || Infinity) - (b.rank || Infinity)),
      }
    case SET_LEADERBOARD:
      return {
        ...state,
        showLeaderboard: action.data,
      }
    case SET_META:
      return {
        ...state,
        meta: action.data,
      }
    default: return state;
  }
};

export default reducer;

export const actions = {
  updateAnnouncement: (data) => {
    return {
      type: UPDATE_ANNOUNCEMENT,
      data
    };
  },
  setUser: (data) => ({
    type: SET_USER,
    data,
  }),
  setApplications: (data) => ({
    type: SET_APPLICATIONS,
    data,
  }),
  setRankings: (data) => ({
    type: SET_RANKINGS,
    data
  }),
  setLeaderboard: (data) => ({
    type: SET_LEADERBOARD,
    data,
  }),
  setMeta: (data) => ({
    type: SET_META,
    data,
  }),
  submitForm: (data) => {
    const ref = firebase.database().ref(`applications/${data.applicationId}`);
    const promise = ref
    .update({ ...data, formSubmittedAt: firebase.database.ServerValue.TIMESTAMP })
    .then(() => ({ data: { ...data, key: ref.key } }));
    return {
      type: SUBMIT_FORM,
      promise,
    };
  },
};
