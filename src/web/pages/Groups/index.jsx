/**
 * @class Groups
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './groups.scss';

const propTypes = {
  // test: PropTypes.number.isRequired,
};

export const Groups = () => (
  <div className={styles.main}>
    Groups page
  </div>
);

Groups.propTypes = propTypes;

export default Groups;
