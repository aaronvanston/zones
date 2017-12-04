import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import styles from './Modal.css';

const Modal = ({ isOpen, contentLabel, children, ...props }) => (
  <ReactModal
    isOpen={isOpen}
    className={styles.modal}
    overlayClassName={styles.overlay}
    contentLabel={contentLabel}
    {...props}
  >
    {children}
  </ReactModal>
);

Modal.defaultProps = {
  contentLabel: 'Modal',
  isOpen: false,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  contentLabel: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default Modal;
