import React from 'react';
import AnswerButton from 'common/components/AnswerButton';
import GameLayout from 'common/components/Layouts/GameLayout';

function GameArea() {
  return (
    <GameLayout question="Some interesting question?">
      <AnswerButton
        letterId="A"
        value="Some good answer"
        onClick={console.log}
      />
      <AnswerButton
        letterId="B"
        value="Some not good answer"
        onClick={console.log}
      />
      <AnswerButton
        letterId="C"
        value="Some not good answer"
        onClick={console.log}
      />
      <AnswerButton
        letterId="D"
        value="Some bad answer"
        onClick={console.log}
      />
    </GameLayout>
  );
}

export default GameArea;
