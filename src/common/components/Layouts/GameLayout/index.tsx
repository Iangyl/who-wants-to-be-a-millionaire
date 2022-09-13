import React from 'react';
import { IGameLayout } from './index.types';
import PrizeItem from 'common/components/PrizeItem';

import styles from './index.module.sass';

const GameLayout: React.FC<IGameLayout> = ({ children, question, prize }) => {
  return (
    <section className={styles.canvas}>
      <div className={styles.content}>
        <div className={styles.question}>{question}</div>
        <div className={styles.answers}>{children}</div>
      </div>
      <aside className={styles.aside}>
        <ul>
          {prize?.map((item) => (
            <PrizeItem
              key={item.value}
              value={item.value}
              status={item.status}
            />
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default GameLayout;
