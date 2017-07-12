/**
 * @class Category
 * @description
 */

/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './category.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  currentPath: PropTypes.string.isRequired,
};

export class Category extends React.Component {
  static propTypes = {
    expanded: PropTypes.boolean,
  }

  static defaultProps = {
    expanded: false,
  }

  constructor(props) {
    super();

    this.state = { expanded: props.expanded };

    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { name, items, currentPath } = this.props;
    const { expanded } = this.state;

    const togglerClass = expanded ? 'icon-chevron-up' : 'icon-chevron-down';

    return (
      <div className={styles.main}>
        <h5>
          <span>{name}</span>
          <i className={togglerClass} onClick={this.toggleExpand} />
        </h5>
        <ul className={expanded ? styles.expanded : ''}>
          {items.map((item, i) => {
            const className = (currentPath === item.path) ? styles.active : '';

            return (
              <li key={i}>
                <Link to={`/trip-reports/${item.path}`} className={className}>
                  <span>{item.name}</span>
                  <span>{item.lastPosted}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Category.propTypes = propTypes;

export default Category;
