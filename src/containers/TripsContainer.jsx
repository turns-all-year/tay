/**
 * @class TripsContainer
 */

import { asyncConnect } from 'redux-connect';

import { getTripsData } from 'actions/tripsActions';

// Adding the contianer logic here
function mapStateToProps({ trips }) {
  return { ...trips };
}

function mapDispatchToProps() {
  return { };
}

export default Component => asyncConnect([
  {
    promise: ({ store: { dispatch } }) => dispatch(getTripsData()),
  },
], mapStateToProps, mapDispatchToProps)(Component);
