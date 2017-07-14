/**
 * @class Trips
 * @description
 */

/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import container from 'containers/TripsContainer';
import TripItem from 'web/components/TripItemLarge';
import StandardSort from 'web/components/ListControls/StandardSort';
import Category from 'web/pages/Trips/Category';

import styles from './trips.scss';

const propTypes = {
  trips: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  routeParams: PropTypes.object.isRequired,
};

export const Trips = ({ trips, categories, routeParams }) => {
  const currentPath = routeParams ? `${routeParams.year}/${routeParams.month}` : '';
  const tripsTitle = categories.reduce((currentTitle, category) => (
    category.items.reduce((curr, item) => {
      if (currentPath === item.path) {
        return item.name;
      }

      return curr;
    }, currentTitle)
  ), 'Recent');

  return (
    <main className={styles.wrapper}>
      <div className={styles.top}>
        <h2 className={styles.pageHeading}>Trip Reports</h2>
        <Link to="create-post/trip-report">+ New Trip Report</Link>
      </div>

      <main className={styles.main}>
        <section>
          {
            categories.map((category, index) => <Category key={index} {...{ ...category, currentPath, expanded: (index === 0) }} />)
          }
        </section>

        <section>
          <div className={styles.tripsTop}>
            <h3>{tripsTitle} Trip Reports</h3>
            <header className={styles.listControls}>
              <StandardSort />
            </header>
          </div>

          <hr />

          { trips.map(trip => <section key={trip.id} className={styles.tripSection}><TripItem {...trip} /></section>) }
        </section>
      </main>

    </main>
  );
};

Trips.propTypes = propTypes;

export default container(Trips);
