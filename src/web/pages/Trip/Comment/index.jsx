/**
 * @class Comment
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './comment.scss';

const propTypes = {
  className: PropTypes.string,
  date: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
};

const defaultProps = {
  className: '',
};

export const Comment = ({ className, date, user, body }) => (
  <div className={`${styles.main} ${className}`}>
    <div><Link to={`/users/${user.id}`}>{user.name}</Link></div>
    <div className={styles.date}>{date}</div>
    <p>{body}</p>
  </div>
);

Comment.propTypes = propTypes;
Comment.defaultProps = defaultProps;

export default Comment;
