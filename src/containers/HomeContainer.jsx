import { connect } from 'react-redux';

// Adding the contianer logic here
function mapStateToProps({ home }) {
  return { ...home };
}

function mapDispatchToProps() {
  return { };
}

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
