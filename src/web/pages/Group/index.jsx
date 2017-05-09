/**
 * @class Group
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './group.scss';

const propTypes = {
  // test: PropTypes.number.isRequired,
};

export const Group = () => (
  <div className={styles.main}>
    Something
  </div>
);

Group.propTypes = propTypes;

export default Group;
