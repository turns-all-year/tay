import actionTypes from 'actions/actionTypes';

const defaultState = {
  data: {},
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.TRIPS.DATA_SUCCESS:
      return { ...state, data: action.data[0] };
    default:
      return state;
  }
}
