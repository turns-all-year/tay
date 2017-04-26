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
          <img alt="Turns All Year" className={styles.logo} src="images/tay-logo-sized.gif" />

          <nav className={`${styles.main} ${navStateClass}`}>
            <div className={styles.title}>urns all year</div>

            <ul className={styles.nav}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/topics/123">Topic 123</Link></li>
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
