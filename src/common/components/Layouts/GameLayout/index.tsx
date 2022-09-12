import React from 'react';

import styles from './index.module.sass';

interface IGameLayout {
  children: React.ReactElement[];
  question: string;
}

const GameLayout: React.FC<IGameLayout> = ({ children, question }) => {
  return (
    <section className={styles.canvas}>
      <div className="wrapper">
        <div className={styles.content}>
          <div className={styles.question}>{question}</div>
          <div className={styles.answers}>{children}</div>
        </div>
        <aside className={styles.aside}></aside>
      </div>
    </section>
  );
};

export default GameLayout;
