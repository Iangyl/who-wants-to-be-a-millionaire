import React from 'react';
import { data } from './mock-data';

import styles from './index.module.sass';

const AnswerItem = () => {
  // better to make a radiobuttons ^)
  return (
    <button type="button" className={styles.AnswerItem}>
      <p>A</p>
      <p>{data.inactive}</p>
    </button>
  );
};

export default AnswerItem;
