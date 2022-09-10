import React from 'react';
import { data } from './mock-data';

import styles from './index.module.sass';

const GeneralButton = () => {
  return (
    <button type="button" className={styles.GeneralButton}>
      <p>{data.inactive}</p>
    </button>
  );
};

export default GeneralButton;
