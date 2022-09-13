import React from 'react';
import classNames from 'classnames';
import { IAnswerButton } from './index.types';

import styles from './index.module.sass';

const AnswerButton: React.FC<IAnswerButton> = ({
  value,
  letterId,
  isCorrect,
  onClick,
}) => {
  const [status, setStatus] = React.useState<string>('inactive');

  const handleClick = () => {
    onClick(isCorrect);
    setStatus(isCorrect ? 'correct' : 'incorrect');
  };

  return (
    <button
      type="button"
      className={classNames(styles[status], styles.AnswerButton)}
      onClick={handleClick}
    >
      <span>{letterId}</span>
      <span>{value}</span>
    </button>
  );
};

export default AnswerButton;
