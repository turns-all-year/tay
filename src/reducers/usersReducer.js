import actionTypes from 'actions/actionTypes';

const defaultState = {
  sortBy: 'date',
  sortDir: 'desc',
  filters: {},
  users: [],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.USERS.DATA_SUCCESS:
      return { ...state, users: action.data };
    default:
      return state;
  }
}
