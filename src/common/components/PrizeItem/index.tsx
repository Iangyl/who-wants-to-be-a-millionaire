import React from 'react';
import classNames from 'classnames';
import { IPrize } from './index.types';

import styles from './index.module.sass';

const PrizeItem: React.FC<IPrize> = ({ value }) => {
  const status = 'active';
  return (
    <li className={classNames(styles[status], styles.PrizeItem)}>
      <div className={styles.content}>
        <span>{value}</span>
      </div>
      <div className={styles.decoration}></div>
    </li>
  );
};

export default PrizeItem;
