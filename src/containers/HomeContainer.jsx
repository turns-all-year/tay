/**
 * @class HomeContainer
 * @description this container is added as a decorator, so the index file can still be the component
 */

import { connect } from 'react-redux';

// Adding the contianer logic here
function mapStateToProps({ home }) {
  return { ...home };
}

function mapDispatchToProps() {
  return { };
}

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
