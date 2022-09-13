import React from 'react';
import classNames from 'classnames';
import { IPrize } from './index.types';

import styles from './index.module.sass';

const PrizeItem: React.FC<IPrize> = ({ value }) => {
  const status = 'active';
  return (
    <li className={classNames(styles[status], styles.PrizeItem)}>
      <span>{value}</span>
    </li>
  );
};

export default PrizeItem;
