/**
 * @class TripsContainer
 */

import { asyncConnect } from 'redux-connect';

import { getTripsData, getTripsCategoriesData } from 'actions/tripsActions';

// Adding the contianer logic here
function mapStateToProps({ trips }, { routeParams }) {
  return { ...trips, routeParams };
}

function mapDispatchToProps() {
  return { };
}

export default Component => asyncConnect([
  {
    promise: ({ store: { dispatch } }) => dispatch(getTripsData()),
  },
  {
    promise: ({ store: { dispatch } }) => dispatch(getTripsCategoriesData()),
  },
], mapStateToProps, mapDispatchToProps)(Component);
