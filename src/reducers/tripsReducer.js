import actionTypes from 'actions/actionTypes';

const defaultState = {
  sortBy: 'date',
  sortDir: 'desc',
  filters: {},
  trips: [],
  categories: [],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.TRIPS.DATA_SUCCESS:
      return { ...state, trips: action.data };
    case actionTypes.TRIPS.CATEGORIES_DATA_SUCCESS:
      return { ...state, categories: action.data };
    default:
      return state;
  }
}
