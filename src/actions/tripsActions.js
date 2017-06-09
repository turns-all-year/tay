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

export function tripsCategoriesDataSuccess(data) {
  return {
    type: actionTypes.TRIPS.CATEGORIES_DATA_SUCCESS,
    data,
  };
}

export function getTripsCategoriesData() {
  return (dispatch) => {
    dispatch(loading());

    return fetch('http://localhost:3000/stubData/tripCategories.json')
      .then(resp => resp.json())
      .then((data) => {
        dispatch(loaded());
        dispatch(tripsCategoriesDataSuccess(data.items));
      })
      .catch(error);
  };
}
