/**
 * @class ListControls
 * @description
 */

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-env browser */

import React from 'react';
// import PropTypes from 'prop-types';

import styles from './listControls.scss';

const propTypes = {
  // test: PropTypes.number.isRequired,
};

export class ListControls extends React.Component {
  constructor() {
    super();

    this.state = {
      filters: {
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
      },
      sort: {
        visible: false,
      },
    };

    this.toggleChecked = this.toggleChecked.bind(this);
    this.toggleFilters = this.toggleFilters.bind(this);
    this.hideFilters = this.hideFilters.bind(this);
    this.toggleSort = this.toggleSort.bind(this);
    this.hideSort = this.hideSort.bind(this);
    this.hideDropDowns = this.hideDropDowns.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.hideDropDowns);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.hideDropDowns);
  }

  toggleChecked(id) {
    this.setState({ filters: { ...this.state.filters, [id]: { checked: !this.state.filters[id].checked } } });
  }

  toggleFilters(e) {
    e.stopPropagation();
    this.hideSort();
    this.setState({ filters: { ...this.state.filters, visible: !this.state.filters.visible } });
  }

  hideDropDowns() {
    this.hideFilters();
    this.hideSort();
  }

  hideFilters() {
    this.setState({ filters: { ...this.state.filters, visible: false } });
  }

  toggleSort(e) {
    e.stopPropagation();
    this.hideFilters();
    this.setState({ sort: { ...this.state.sort, visible: !this.state.sort.visible } });
  }

  hideSort() {
    this.setState({ sort: { ...this.state.sort, visible: false } });
  }

  render() {
    const {
      filters: { trips, tracks, tagged, visible: filtersVisible },
      sort: { visible: sortVisible },
    } = this.state;

    const filterStyles = { display: filtersVisible ? 'block' : 'none' };
    const sortStyles = { display: sortVisible ? 'block' : 'none' };

    return (
      <header className={styles.main}>
        <section className={styles.controlGroup} onClick={this.toggleFilters} >
          <div className={`${styles.groupLabel} ${filtersVisible ? styles.active : ''}`}>
            <label htmlFor="toggle-filters">Filter:</label>
            <i className="icon-sound-mix" id="toggle-filters" />
          </div>

          <ul className={styles.filters} style={filterStyles} onClick={e => e.stopPropagation()}>
            <li>
              <input type="checkbox" checked={trips.checked} onChange={() => this.toggleChecked('trips')} name="trips" id="trips" />
              <label htmlFor="trips">Trip Reports</label>
            </li>
            <li>
              <input type="checkbox" checked={tracks.checked} onChange={() => this.toggleChecked('tracks')} name="tracks" id="tracks" />
              <label htmlFor="tracks">Trip Reports</label>
            </li>
            <li>
              <input type="checkbox" checked={tagged.checked} onChange={() => this.toggleChecked('tagged')} name="tagged" id="tagged" />
              <label htmlFor="tagged">Tagged in</label>
            </li>
          </ul>
        </section>

        <section className={styles.controlGroup} onClick={this.toggleSort}>
          <div className={`${styles.groupLabel} ${sortVisible ? styles.active : ''}`}>
            <label htmlFor="toggle-sort">Sort:</label>
            <i className="icon-select-arrows" id="toggle-sort" />
          </div>

          <ul className={styles.sort} style={sortStyles} onClick={e => e.stopPropagation()}>
            <li>
              <a><i className="icon-arrow-down" /> <span>Recent</span></a>
            </li>
            <li>
              <a><i className="icon-arrow-up" /> <span>Older</span></a>
            </li>
            <li>
              <a><i className="icon-add-user" /> <span>Popular</span></a>
            </li>
          </ul>
        </section>
      </header>
    );
  }
}

ListControls.propTypes = propTypes;

export default ListControls;
