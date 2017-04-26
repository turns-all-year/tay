import React from 'react';
// import PropTypes from 'prop-types';

import styles from './home.scss';

const Home = () => (
  <main className={styles.main}>
    <section className={styles.left}>
      Trip reports...
    </section>

    <section className={styles.right}>
      Random tracks...
    </section>
  </main>
);

export default Home;
