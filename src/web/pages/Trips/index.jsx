/**
 * @class Trips
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';

import container from 'containers/TripsContainer';
import TripItem from 'web/components/TripItemLarge';

import styles from './trips.scss';

const propTypes = {
  trips: PropTypes.array.isRequired,
};

export const Trips = ({ trips }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.pageHeading}>Trip Reports</h2>
    <main className={styles.main}>
      { trips.map(trip => <section key={trip.id} className={styles.tripSection}><TripItem {...trip} /></section>) }
    </main>
  </div>
);

Trips.propTypes = propTypes;

export default container(Trips);
