/**
 * @class ImageViewer
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';

import Carousel from 'web/components/Carousel';

import styles from './imageViewer.scss';

const propTypes = {
  images: PropTypes.array.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

export const ImageViewer = ({ images, className }) => (
  <div className={`${styles.main} ${className}`}>
    <Carousel tilesPerPage={3} touchExperience={false}>
      {images.map(image => (
        <div className={styles.imageWrapper}>
          <div className={styles.image} style={{ backgroundImage: `url(/images/${image})` }} />
          <p>
            Captions...
          </p>
        </div>
      ))}
    </Carousel>
  </div>
);

ImageViewer.propTypes = propTypes;
ImageViewer.defaultProps = defaultProps;

export default ImageViewer;
