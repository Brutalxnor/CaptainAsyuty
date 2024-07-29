

import React from 'react';
import styles from './LoadingSpinner.module.css'; // Import the CSS module

const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;

