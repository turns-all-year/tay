/**
 * @class StandardSort
 * @description
 */

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-env browser */

import React from 'react';
// import PropTypes from 'prop-types';

import styles from './standardSort.scss';

export class StandardSort extends React.Component {
  static propTypes = {}

  constructor() {
    super();

    this.state = {
      visible: false,
    };

    this.toggle = this.toggle.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.hide);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.hide);
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
    const { visible } = this.state;
    const sortStyles = { display: visible ? 'block' : 'none' };

    return (
      <section className={styles.controlGroup} onClick={this.toggle}>
        <div className={`${styles.groupLabel} ${visible ? styles.active : ''}`}>
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
    );
  }
}

export default StandardSort;
