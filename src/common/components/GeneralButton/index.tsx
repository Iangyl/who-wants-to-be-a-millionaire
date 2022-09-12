import React from 'react';
import { IGeneralButton } from './index.types';

import styles from './index.module.sass';

const GeneralButton: React.FC<IGeneralButton> = ({ value, onClick }) => {
  return (
    <button type="button" className={styles.GeneralButton} onClick={onClick}>
      <p>{value}</p>
    </button>
  );
};

export default GeneralButton;
