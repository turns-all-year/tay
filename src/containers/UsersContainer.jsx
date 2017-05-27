import { asyncConnect } from 'redux-connect';

import { getUsersData } from 'actions/usersActions';

// Adding the contianer logic here
function mapStateToProps({ users }) {
  return { ...users };
}

function mapDispatchToProps() {
  return { };
}

export default Component => asyncConnect([
  {
    promise: ({ store: { dispatch } }) => dispatch(getUsersData()),
  },
], mapStateToProps, mapDispatchToProps)(Component);
