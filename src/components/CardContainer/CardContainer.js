import React from 'react';
import PropTypes from 'prop-types';

import styles from './CardContainer.css';

const CardContainer = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

CardContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardContainer;
