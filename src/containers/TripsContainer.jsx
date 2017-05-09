/**
 * @class TripsContainer
 */

import { connect } from 'react-redux';

// Adding the contianer logic here
function mapStateToProps({ trips }) {
  return { ...trips };
}

function mapDispatchToProps() {
  return { };
}

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
