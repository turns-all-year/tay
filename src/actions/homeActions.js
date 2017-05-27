import actionTypes from './actionTypes';
import { loading, error, loaded } from './sharedActions';

export function homeDataSuccess(data) {
  return {
    type: actionTypes.HOME.DATA_SUCCESS,
    data,
  };
}

export function getHomeData() {
  return (dispatch) => {
    dispatch(loading());
    return Promise.all([
      fetch('http://localhost:3000/stubData/trips.json').then(resp => resp.json()),
      fetch('http://localhost:3000/stubData/tracks.json').then(resp => resp.json()),
    ]).then((resps) => {
      dispatch(loaded());
      dispatch(homeDataSuccess({ trips: resps[0].items, tracks: resps[1].items }));
    })
    .catch(error);
  };
}
