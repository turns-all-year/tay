import { asyncConnect } from 'redux-connect';

import { getHomeData } from 'actions/homeActions';

// Adding the contianer logic here
function mapStateToProps({ home }) {
  return { ...home };
}

function mapDispatchToProps() {
  return { };
}

export default Component => asyncConnect([
  {
    promise: ({ store: { dispatch } }) => dispatch(getHomeData()),
  },
], mapStateToProps, mapDispatchToProps)(Component);
