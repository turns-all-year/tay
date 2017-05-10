/**
 * @class Trip
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './trip.scss';

const propTypes = {
  // test: PropTypes.number.isRequired,
};

export const Trip = () => (
  <div className={styles.main}>
    Trip report detail page
  </div>
);

Trip.propTypes = propTypes;

export default Trip;
