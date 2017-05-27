/**
 * @class Users
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';

import container from 'containers/UsersContainer';

import styles from './users.scss';

const propTypes = {
  // test: PropTypes.number.isRequired,
};

export const Users = (props) => {
  // console.log(props);
  return (
    <div className={styles.main}>
      Users page
    </div>
  );
};

Users.propTypes = propTypes;

export default container(Users);
