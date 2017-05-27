import actionTypes from './actionTypes';
import { loading, error, loaded } from './sharedActions';

export function tripsDataSuccess(data) {
  return {
    type: actionTypes.TRIPS.DATA_SUCCESS,
    data,
  };
}

export function getTripsData() {
  return (dispatch) => {
    dispatch(loading());

    return fetch('http://localhost:3000/stubData/trips.json')
      .then(resp => resp.json())
      .then((data) => {
        dispatch(loaded());
        dispatch(tripsDataSuccess(data.items));
      })
      .catch(error);
  };
}
