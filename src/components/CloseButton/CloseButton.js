import React from 'react';

import styles from './CloseButton.css';

const CloseButton = props => (
  <button className={styles.close} {...props}>
    Close
  </button>
);


export default CloseButton;
