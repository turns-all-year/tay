/**
 * @class TripItem
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';
import Shiitake from 'shiitake';
import { Link } from 'react-router';

import styles from './tripItem.scss';

const propTypes = {
  img: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  className: PropTypes.string,
  author: PropTypes.object.is,
  id: PropTypes.string.isRequired,
};

const defaultProps = {
  className: '',
  author: null,
};

export const TripItem = ({ img, date, title, body, className, author, id }) => (
  <div className={`${styles.main} ${className}`}>
    {author ?
      <Link
        className={styles.image}
        style={{ backgroundImage: `url(/images/${img[0]})` }}
        to={`users/${author.id}/trip-reports/${id}`}
      /> :
      <div className={styles.image} style={{ backgroundImage: `url(/images/${img[0]})` }} />
    }

    <div className={styles.data}>
      <h4 className={styles.tripTitle}>
        {author ?
          <Link to={`users/${author.id}/trip-reports/${id}`}>{title}</Link> :
          title
        }
      </h4>

      <span className={styles.date}>{date}</span>
      { author ? <Link to={`users/${author.id}`} className={styles.author}>{author.name}</Link> : null }
      <Shiitake className={styles.body} lines={8}>{body}</Shiitake>
    </div>
  </div>
);

TripItem.propTypes = propTypes;
TripItem.defaultProps = defaultProps;

export default TripItem;
