/**
 * @class TripContainer
 * @description this container is added as a decorator, so the index file can still be the component
 */

import { asyncConnect } from 'redux-connect';

import { getTripsData } from 'actions/tripsActions';

// Adding the contianer logic here
function mapStateToProps({ trip }) {
  return { ...trip.data, user: trip.data.author };
}

function mapDispatchToProps() { // dispatch) {
  return { };
}

export default Component => asyncConnect([
  {
    promise: ({ store: { dispatch } }) => dispatch(getTripsData()),
  },
], mapStateToProps, mapDispatchToProps)(Component);
