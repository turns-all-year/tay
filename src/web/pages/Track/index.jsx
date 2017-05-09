/**
 * @class Track
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './track.scss';

const propTypes = {
  // test: PropTypes.number.isRequired,
};

export const Track = () => (
  <div className={styles.main}>
    Ramdom track page
  </div>
);

Track.propTypes = propTypes;

export default Track;
