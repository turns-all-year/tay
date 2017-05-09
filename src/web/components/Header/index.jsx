import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import styles from './header.scss';

class Header extends React.Component {
  constructor() {
    super();

    this.state = { showMenu: false };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    const navStateClass = (this.state.showMenu) ? styles.showMenu : '';

    return (
      <header className={styles.wrapper}>
        <div className={styles.container}>
          <Link to="/" title="home">
            <img alt="Turns All Year" className={styles.logo} src="/images/tay-logo-sized.png" />
          </Link>

          <nav className={`${styles.main} ${navStateClass}`}>
            <ul className={styles.nav}>
              <li><Link to="/groups">Groups</Link></li>
              <li><Link to="/users">Skiers</Link></li>
              <li><Link to="/trip-reports">Trip Reports</Link></li>
              <li><Link to="/random-tracks">Random Tracks</Link></li>
            </ul>

            <switch className={styles.hamburger} onClick={this.toggleMenu}>
              <i className="icon-menu" />
            </switch>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
