import React from 'react';
import { IGameLayout } from './index.types';
import { slide as Menu } from 'react-burger-menu';
import useWindowSize from 'common/modules/hooks/useWindowSize';

import styles from './index.module.sass';
import Sidebar from 'common/components/Sidebar';

const GameLayout: React.FC<IGameLayout> = ({ children, question, prize }) => {
  const windowSize = useWindowSize();

  return (
    <section id="game-canvas" className={styles.canvas}>
      <div id="game-area" className={styles.content}>
        <div className={styles.question}>{question}</div>
        <div className={styles.answers}>{children}</div>
      </div>
      {windowSize?.width <= 426 ? (
        <Menu
          width={windowSize?.width <= 320 ? 320 : 376}
          right
          pageWrapId="game-area"
          outerContainerId="game-canvas"
        >
          <Sidebar prize={prize} />
        </Menu>
      ) : (
        <Sidebar prize={prize} />
      )}
    </section>
  );
};

export default GameLayout;
