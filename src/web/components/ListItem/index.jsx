/**
 * @class ListItem
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';
import Shiitake from 'shiitake';
import { Link } from 'react-router-dom';

import styles from './listItem.scss';

const propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  className: PropTypes.string,
  author: PropTypes.object,
};

const defaultProps = {
  className: '',
  author: null,
};

export const ListItem = ({ date, title, body, className, author }) => (
  <div className={`${styles.main} ${className}`}>
    <h4>{title}</h4>
    <span className={styles.date}>{date}</span>
    { author ? <Link to={`users/${author.id}`} className={styles.author}>{author.name}</Link> : null }
    <Shiitake className={styles.body} lines={8}>{body}</Shiitake>
  </div>
);

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
