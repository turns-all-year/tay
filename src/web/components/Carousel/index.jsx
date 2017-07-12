/**
 * @class Carousel
 * @implements React.Component
 * @description carousel component.
 */

import React from 'react';
import PropTypes from 'prop-types';

import Controls from './Controls';
import styles from './carousel.scss';

/* eslint-disable react/no-array-index-key */

export class Carousel extends React.Component {

  static propTypes = {
    children: PropTypes.array.isRequired, // eslint-disable-line
    touchExperience: PropTypes.bool.isRequired,
    tilesPerPage: PropTypes.number.isRequired,
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  constructor() {
    super();

    this.state = {
      page: 0,
    };

    this.setPage = this.setPage.bind(this);
  }

  setPage(page) {
    this.setState({ page });
  }

  render() {
    const {
      touchExperience,
      children,
      tilesPerPage,
      className,
    } = this.props;

    const { page } = this.state;

    const contentStyles = (page > 0 && !touchExperience) ? {
      transform: `translate3d(-${100 * page}%, 0px, 0px)`,
    } : {};

    const touchExperienceClass = (touchExperience) ? 'is-touch-experience' : 'is-mouse-experience';

    let controls = null;
    if (!touchExperience) {
      const controlsProps = {
        page,
        setPage: this.setPage,
        numberOfTiles: children.length,
        tilesPerPage,
      };
      controls = <Controls {...controlsProps} />;
    }

    return (
      <div className={styles.wrapper}>
        {controls}
        <div className={`${styles.main} ${touchExperienceClass} ${className}`}>
          <div className={styles.content} style={contentStyles}>
            {children.map((child, index) => <div key={index} className={`carousel-tile-wrapper ${styles.tileWrapper}`}>{child}</div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
