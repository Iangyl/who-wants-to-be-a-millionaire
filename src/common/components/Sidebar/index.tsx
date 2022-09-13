import React from 'react';
import { IGameLayout } from 'common/components/Layouts/GameLayout/index.types';
import PrizeItem from 'common/components/PrizeItem';

import styles from './index.module.sass';

const Sidebar: React.FC<Pick<IGameLayout, 'prize'>> = ({ prize }) => {
  return (
    <aside className={styles.aside}>
      <ul>
        {prize?.map((item) => (
          <PrizeItem key={item.value} value={item.value} status={item.status} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
