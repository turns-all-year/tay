/**
 * @class ArrowPager
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './arrowPager.scss';

const propTypes = {
  isRight: PropTypes.bool.isRequired,
  className: PropTypes.string,
  prev: PropTypes.func,
  next: PropTypes.func,
  disabled: PropTypes.bool,
};

const defaultProps = {
  className: '',
  prev: () => {},
  next: () => {},
  disabled: false,
};

export const ArrowPager = ({ isRight, className, prev, next, disabled }) => {
  let action;
  let icon;

  if (isRight) {
    action = next;
    icon = <i className="icon-chevron-thin-right" />;
  } else {
    action = prev;
    icon = <i className="icon-chevron-thin-left" />;
  }

  return (
    <div
      className={`${isRight ? 'right' : 'left'}-arrow-container ${styles.main} ${className} ${disabled ? styles.disabled : ''}`}
      onClick={action}
    >
      {icon}
    </div>
  );
};

ArrowPager.propTypes = propTypes;
ArrowPager.defaultProps = defaultProps;

export default ArrowPager;
