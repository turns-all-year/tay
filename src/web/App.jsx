import React from 'react';
import PropTypes from 'prop-types';

import Header from 'web/components/Header';

import styles from './app.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const App = ({ children }) => (
  <div className={styles.main}>
    <Header />
    {children}
  </div>
);

App.propTypes = propTypes;

export default App;
