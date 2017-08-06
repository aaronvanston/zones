import React from 'react';
import PropTypes from 'prop-types';

import { CardContainer, EditButton } from '../';

import styles from './Card.css';

const Card = ({ gmt, location }) => (
  <CardContainer>
    <div className={styles.card}>
      <EditButton />
      <div className={styles.location}>{location}</div>
      <div className={styles.time}>12:15</div>
      <div className={styles.gmt}>gmt{gmt >= 0 ? `+${gmt}` : gmt}</div>
    </div>
  </CardContainer>
);

Card.propTypes = {
  gmt: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default Card;
