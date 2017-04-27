import React from 'react';
import PropTypes from 'prop-types';

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
      <hr />
      { trips.map(trip => <TripItem {...trip} className={styles.tripItem} />) }
    </section>

    <section className={styles.tracks}>
      <h3 className={styles.columnHeading}>Recent Posts</h3>
      <hr />
      { tracks.map(track => <ListItem {...track} className={styles.listItem} />)}
    </section>
  </main>
);

Home.propTypes = propTypes;

export default container(Home);
