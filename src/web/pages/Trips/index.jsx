/**
 * @class Trips
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';

import container from 'containers/TripsContainer';
import TripItem from 'web/components/TripItemLarge';
import ListControls from 'web/components/ListControls';

import styles from './trips.scss';

const propTypes = {
  trips: PropTypes.array.isRequired,
};

export const Trips = ({ trips }) => (
  <main className={styles.main}>
    <div className={styles.top}>
      <h2 className={styles.pageHeading}>Trip Reports</h2>

      <ListControls />
    </div>

    { trips.map(trip => <section key={trip.id} className={styles.tripSection}><TripItem {...trip} /></section>) }
  </main>
);

Trips.propTypes = propTypes;

export default container(Trips);
