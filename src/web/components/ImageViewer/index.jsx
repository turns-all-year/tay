/**
 * @class ImageViewer
 * @description
 */

/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';

import Carousel from 'web/components/Carousel';
import ImageViewerItem from './ImageViewerItem';

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
        <ImageViewerItem key={image} {...{ image }} />
      ))}
    </Carousel>
  </div>
);

ImageViewer.propTypes = propTypes;
ImageViewer.defaultProps = defaultProps;

export default ImageViewer;
