import React from 'react';
import classNames from 'classnames';
import { IAnswerButton } from './index.types';

import styles from './index.module.sass';

const AnswerButton: React.FC<IAnswerButton> = ({
  value,
  letterId,
  onClick,
}) => {
  const status = 'inactive';
  return (
    <button
      type="button"
      className={classNames(styles[status], styles.AnswerButton)}
      onClick={() => onClick(letterId)}
    >
      <div className={styles.content}>
        <span>{letterId}</span>
        <span>{value}</span>
      </div>
      <div className={styles.decoration}></div>
    </button>
  );
};

export default AnswerButton;
