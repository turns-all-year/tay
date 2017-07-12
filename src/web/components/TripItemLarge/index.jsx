/**
 * @class TripItem
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';
import Shiitake from 'shiitake';
import { Link } from 'react-router';

import styles from './tripItemLarge.scss';

const propTypes = {
  img: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  className: PropTypes.string,
  author: PropTypes.object,
  id: PropTypes.string.isRequired,
};

const defaultProps = {
  className: '',
  author: null,
};

export const TripItemLarge = ({ id, img, date, title, body, className, author }) => (
  <div className={`${styles.main} ${className}`}>
    <Link
      className={styles.image}
      style={{ backgroundImage: `url(/images/${img[0]})` }}
      to={`users/${author.id}/trip-reports/${id}`}
    />

    <div className={styles.data}>
      <h4 className={styles.tripTitle}>
        <Link to={`users/${author.id}/trip-reports/${id}`}>{title}</Link>
      </h4>

      <div className={styles.date}>{date}</div>

      <Link to={`users/${author.id}`} className={styles.author}>{author.name}</Link>
      &nbsp; @ &nbsp;
      <Link to="/groups/123">Awesome Group</Link>

      <Shiitake className={styles.body} lines={8}>{body}</Shiitake>
    </div>
  </div>
);

TripItemLarge.propTypes = propTypes;
TripItemLarge.defaultProps = defaultProps;

export default TripItemLarge;
