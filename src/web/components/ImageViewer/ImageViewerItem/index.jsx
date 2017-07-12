/**
 * @class ImageViewerItem
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'web/components/Modal';

import styles from './imageViewerItem.scss';

export class ImageViewerItem extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
  }

  constructor() {
    super();

    this.state = { modalVisible: false };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    const { image } = this.props;

    return (
      <div key={image} className={styles.imageWrapper}>
        <div className={styles.image} style={{ backgroundImage: `url(/images/${image})` }} />
        <p>
          Captions...
        </p>
      </div>
    );
  }
}

export default ImageViewerItem;
