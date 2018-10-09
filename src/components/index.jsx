import React from 'react';
import { render } from 'react-dom';

import styles from './index.css'

const App = () => {
  return <h1 className={styles.header}>React Boilerplate</h1>;
};

render(<App />, document.getElementById('root'));
