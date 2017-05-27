const actionTypes = {
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  LOADED: 'LOADED',

  HOME: {
    DATA_SUCCESS: 'HOME.DATA_SUCCESS',
  },

  TRIPS: {
    DATA_SUCCESS: 'TRIPS.DATA_SUCCESS',
  },

  TRACKS: {
    DATA_SUCCESS: 'TRACKS.DATA_SUCCESS',
  },

  USERS: {
    DATA_SUCCESS: 'USERS.DATA_SUCCESS',
  },

  USER: {
    DATA_SUCCESS: 'USER.DATA_SUCCESS',
  },

  GROUPS: {
    DATA_SUCCESS: 'GROUPS.DATA_SUCCESS',
  },
};

export default Object.freeze(actionTypes);
