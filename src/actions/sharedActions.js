import actionTypes from './actionTypes';

export function loading() {
  return {
    type: actionTypes.LOADING,
  };
}

export function loaded() {
  return {
    type: actionTypes.LOADED,
  };
}

export function error(err) {
  return {
    type: actionTypes.ERROR,
    err,
  };
}
