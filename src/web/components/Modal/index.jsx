/**
 * @class Modal
 * @description
 */

import React from 'react';
import PropTypes from 'prop-types';

import Portal from 'web/components/Portal';

import styles from './modal.scss';

export class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    visible: PropTypes.bool,
  }

  static defaultProps = {
    visible: false,
  }

  constructor() {
    super();

    this.state = { visible: false };

    this.toggleVisible = this.toggleVisible.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible !== nextProps.visible) {
      this.setState({ visible: nextProps.visible });
    }
  }

  toggleVisible() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { children } = this.props;

    const portal = this.state.visible ? (
      <Portal className={styles.portal}>
        {children}
      </Portal>
    ) : null;

    return (
      <div className={styles.main}>
        {portal}
      </div>
    );
  }
}

export default Modal;
