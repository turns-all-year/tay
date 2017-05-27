import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import container from 'containers/HomeContainer';
import TripItem from 'web/components/TripItem';
import ListItem from 'web/components/ListItem';

import styles from './home.scss';

const propTypes = {
  trips: PropTypes.array.isRequired,
  tracks: PropTypes.array.isRequired,
};

const Home = ({ trips, tracks }) => (
  <main className={styles.main}>
    <section className={styles.trips}>
      <h3 className={styles.columnHeading}>Recent Trips</h3>
      <Link to="trip-reports" className={styles.viewAll}>view all</Link>
      <hr />
      { trips.map(trip => <TripItem key={trip.id} {...trip} className={styles.tripItem} />) }
    </section>

    <section className={styles.tracks}>
      <h3 className={styles.columnHeading}>Recent Posts</h3>
      <Link to="random-tracks" className={styles.viewAll}>view all</Link>
      <hr />
      { tracks.map(track => <ListItem key={track.id} {...track} className={styles.listItem} />)}
    </section>
  </main>
);

Home.propTypes = propTypes;

export default container(Home);
