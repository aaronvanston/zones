import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import { Header, ZoneList } from '../';
import { addLocation } from '../../actions';
import styles from './App.css';

const tempZones = [
  { gmt: 11, location: 'Melbourne' },
  { gmt: -11, location: 'Sydney' },
];

const App = ({ dispatch }) => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>
      <ZoneList zones={tempZones} />
    </main>
    <button onClick={() => dispatch(addLocation('test'))}>Test redux</button>
  </div>
);

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default connect()(App);
