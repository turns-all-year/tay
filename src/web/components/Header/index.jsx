import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import styles from './header.scss';

const Header = () => (
  <header className={styles.wrapper}>
    <div className={styles.container}>
      <img alt="Turns All Year" className={styles.logo} src="images/tay-logo-sized.gif" />

      <nav className={styles.main}>
        <div className={styles.title}>urns all year</div>
        <ul className={styles.nav}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics/123">Topic 123</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
