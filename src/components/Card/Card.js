import React from 'react';
import PropTypes from 'prop-types';

import { CardContainer } from '../';

import styles from './Card.css';

const Card = ({ gmt, location }) => (
  <CardContainer>
    <div className={styles.card}>
      <div>Location: {location}</div>
      <div>GMT: {gmt}</div>
    </div>
  </CardContainer>
);

Card.propTypes = {
  gmt: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default Card;
