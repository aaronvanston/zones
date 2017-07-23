import React from 'react';

import { Header } from '../';
import styles from './App.css';

const App = () => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>
      Body
    </main>
  </div>
);

export default App;
