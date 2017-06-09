/**
 * @class UserFilter
 * @description
 */

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-env browser */

import React from 'react';
// import PropTypes from 'prop-types';

import styles from './userFilter.scss';

export class UserFilter extends React.Component {
  static propTypes = {}

  constructor() {
    super();

    this.state = {
      visible: false,
      trips: {
        checked: true,
      },
      tracks: {
        checked: true,
      },
      tagged: {
        checked: false,
      },
    };

    this.toggleChecked = this.toggleChecked.bind(this);
    this.toggle = this.toggle.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.hide);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.hide);
  }

  toggleChecked(id) {
    this.setState({ [id]: { checked: !this.state.filters[id].checked } });
  }

  hide(e) {
    e.stopPropagation();
    this.setState({ visible: false });
  }

  toggle(e) {
    e.stopPropagation();
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { visible, trips, tracks, tagged } = this.state;
    const filterStyles = { display: visible ? 'block' : 'none' };

    return (
      <section className={styles.controlGroup} onClick={this.toggle} >
        <div className={`${styles.groupLabel} ${visible ? styles.active : ''}`}>
          <label htmlFor="toggle-filters">Filter:</label>
          <i className="icon-sound-mix" id="toggle-filters" />
        </div>

        <ul className={styles.filters} style={filterStyles} onClick={e => e.stopPropagation()}>
          <li>
            <input type="checkbox" checked={trips.checked} onChange={() => this.toggleChecked('trips')} name="trips" id="trips" />
            <label htmlFor="trips">Trip Reports Written</label>
          </li>
          <li>
            <input type="checkbox" checked={tracks.checked} onChange={() => this.toggleChecked('tracks')} name="tracks" id="tracks" />
            <label htmlFor="tracks">Posts in Random Tracks</label>
          </li>
          <li>
            <input type="checkbox" checked={tagged.checked} onChange={() => this.toggleChecked('tagged')} name="tagged" id="tagged" />
            <label htmlFor="tagged">Tagged In / @ Mentions</label>
          </li>
        </ul>
      </section>
    );
  }
}

export default UserFilter;
