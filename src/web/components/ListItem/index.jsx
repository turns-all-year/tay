/**
 * @class ListItem
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';
import Shiitake from 'shiitake';

import styles from './listItem.scss';

const propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

export const ListItem = ({ date, title, body, className }) => (
  <div className={`${styles.main} ${className}`}>
    <h4>{title}</h4>
    <span className={styles.date}>{date}</span>
    <Shiitake className={styles.body} lines={8}>{body}</Shiitake>
  </div>
);

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
