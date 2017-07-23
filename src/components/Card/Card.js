import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.css';

const Card = ({ gmt, location }) => (
  <div className={styles.wrapper}>
    <div>{gmt}</div>
    <div>{location}</div>
  </div>
);

Card.propTypes = {
  gmt: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default Card;
