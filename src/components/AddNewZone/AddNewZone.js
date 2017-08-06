import React from 'react';

import { CardContainer } from '../';

import styles from './AddNewZone.css';

const AddNewZone = () => (
  <CardContainer>
    <button className={styles.card}>
      <span className={styles.heading}>Add new</span>
      <span className={styles.sub}>Zone</span>
    </button>
  </CardContainer>
);


export default AddNewZone;
