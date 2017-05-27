import actionTypes from './actionTypes';
import { loading, error, loaded } from './sharedActions';

export function usersDataSuccess(data) {
  return {
    type: actionTypes.USERS.DATA_SUCCESS,
    data,
  };
}

export function getUsersData() {
  return (dispatch) => {
    dispatch(loading());

    return fetch('http://localhost:3000/stubData/users.json')
      .then(resp => resp.json())
      .then((data) => {
        dispatch(loaded());
        dispatch(usersDataSuccess(data.items));
      })
      .catch(err => dispatch(error(err)));
  };
}
