import React from 'react';
import classNames from 'classnames';
import { IPrize } from 'common/modules/redux/slices/gameSlice';

import styles from './index.module.sass';

const PrizeItem: React.FC<IPrize> = ({ value, status }) => {
  return (
    <li className={classNames(styles[status], styles.PrizeItem)}>
      <span>{value}</span>
    </li>
  );
};

export default PrizeItem;
