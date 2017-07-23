import React from 'react';

import { Header, ZoneList } from '../';
import styles from './App.css';

const tempZones = [
  { gmt: 11, location: 'Melbourne' },
  { gmt: -11, location: 'Sydney' },
];

const App = () => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>
      <ZoneList zones={tempZones} />
    </main>
  </div>
);

export default App;
