/**
 * @class TripItem
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';
import Shiitake from 'shiitake';

import styles from './tripItem.scss';

const propTypes = {
  img: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

export const TripItem = ({ img, date, title, body, className }) => (
  <div className={`${styles.main} ${className}`}>
    <div className={styles.image} style={{ background: `url(images/${img}) no-repeat center` }} />

    <div className={styles.data}>
      <h4>{title}</h4>
      <span className={styles.date}>{date}</span>
      <Shiitake className={styles.body} lines={8}>{body}</Shiitake>
    </div>
  </div>
);

TripItem.propTypes = propTypes;
TripItem.defaultProps = defaultProps;

export default TripItem;
