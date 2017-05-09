/**
 * @class Tracks
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './tracks.scss';

const propTypes = {
  // test: PropTypes.number.isRequired,
};

export const Tracks = () => (
  <div className={styles.main}>
    Random tracks page
  </div>
);

Tracks.propTypes = propTypes;

export default Tracks;
