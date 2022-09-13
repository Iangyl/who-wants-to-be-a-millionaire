import React from 'react';
import AnswerButton from 'common/components/AnswerButton';
import GameLayout from 'common/components/Layouts/GameLayout';

const prize = [
  500, 1000, 10000, 15000, 100000, 150000, 1000000, 1500000, 15000000,
];

function GameArea() {
  return (
    <GameLayout question="Some interesting question?" prize={prize}>
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
