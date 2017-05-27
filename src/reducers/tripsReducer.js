import actionTypes from 'actions/actionTypes';

const defaultState = {
  sortBy: 'date',
  sortDir: 'desc',
  filters: {},
  trips: [],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.TRIPS.DATA_SUCCESS:
      return { ...state, trips: action.data };
    default:
      return state;
  }
}
