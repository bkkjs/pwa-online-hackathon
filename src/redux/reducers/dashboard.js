import { constantCreator } from '../constantCreator';
const constant = constantCreator('dashboard');
const UPDATE_ANNOUNCEMENT = constant('UPDATE_ANNOUNCEMENT');
const SET_USER = constant('SET_USER');
const SET_APPLICATIONS = constant('SET_APPLICATIONS');
const SET_LEADERBOARD = constant('SET_LEADERBOARD');

const initialState = {
  announcement: '',
  publicApplications: [],
  showLeaderboard: false,
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
        publicApplications: Object.keys(action.data)
          .map((key) => action.data[key])
          .sort((a,b) => a.rank > b.rank),
      }
    case SET_LEADERBOARD:
      return {
        ...state,
        showLeaderboard: action.data,
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
  setLeaderboard: (data) => ({
    type: SET_LEADERBOARD,
    data,
  })
};
