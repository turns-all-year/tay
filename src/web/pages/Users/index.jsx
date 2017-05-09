/**
 * @class Users
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './users.scss';

const propTypes = {
  // test: PropTypes.number.isRequired,
};

export const Users = () => (
  <div className={styles.main}>
    Users page
  </div>
);

Users.propTypes = propTypes;

export default Users;
