/**
 * @class CarouselControls
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';

import ArrowPager from './ArrowPager';
import styles from './controls.scss';

export const propTypes = {
  page: PropTypes.number.isRequired,
  numberOfTiles: PropTypes.number.isRequired,
  tilesPerPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export const CarouselControls = (props) => {
  const { page, numberOfTiles, tilesPerPage, setPage } = props;

  const maxPages = Math.ceil(numberOfTiles / tilesPerPage);
  const prev = () => setPage(page - 1);
  const next = () => setPage(page + 1);

  const prevPager = (page > 0)
    ? <ArrowPager {...{ prev, isRight: false, className: styles.leftArrow }} />
    : <ArrowPager disabled {...{ isRight: false, className: styles.leftArrow }} />;

  const nextPager = (page < maxPages - 1)
    ? <ArrowPager {...{ next, isRight: true, className: styles.rightArrow }} />
    : <ArrowPager disabled {...{ isRight: true, className: styles.rightArrow }} />;

  return (
    <div className={styles.main}>
      {prevPager}
      {nextPager}
    </div>
  );
};

CarouselControls.propTypes = propTypes;

export default CarouselControls;
