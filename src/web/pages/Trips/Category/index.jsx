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

export const Category = ({ name, items, currentPath }) => (
  <div className={styles.main}>
    <h5>{name}</h5>
    <ul>
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

    <hr />
  </div>
);

Category.propTypes = propTypes;

export default Category;
