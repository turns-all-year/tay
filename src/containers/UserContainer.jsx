import { connect } from 'react-redux';

// Adding the contianer logic here
function mapStateToProps({ user }) {
  return { ...user };
}

function mapDispatchToProps() {
  return { };
}

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
