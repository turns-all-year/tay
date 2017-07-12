/**
 * @class Carousel Container
 * @description
 */

import { connect } from 'react-redux';

export function mapStateToProps({ global: { touchExperience } }) {
  return { touchExperience };
}

export default Component => connect(mapStateToProps)(Component);
