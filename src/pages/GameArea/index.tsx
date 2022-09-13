import React from 'react';
import AppRoutes from 'common/modules/routes';
import { useNavigate } from 'react-router-dom';
import { Answer } from 'common/lib/data.types';
import AnswerButton from 'common/components/AnswerButton';
import GameLayout from 'common/components/Layouts/GameLayout';
import { useAppDispatch, useAppSelector } from 'common/modules/redux/hooks';
import {
  nextQuestion,
  updateStatus,
} from 'common/modules/redux/slices/gameSlice';
import LottieAnimation from 'common/components/LottieAnimation';

function GameArea() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.game);

  const handleClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setTimeout(() => {
        dispatch(nextQuestion());
      }, 3000);
    } else {
      setTimeout(() => {
        dispatch(updateStatus('lose'));
        navigate(AppRoutes.END_PAGE);
      }, 3000);
    }
  };

  return (
    <GameLayout
      question={state?.currentQuestion?.question ?? 'Some question?'}
      prize={state?.prizes.map((prize) => Number(prize))}
    >
      {state?.currentQuestion?.answers?.map((answer: Answer) => (
        <AnswerButton
          key={answer?.value}
          letterId={answer?.letterId}
          value={answer?.value}
          onClick={() => handleClick(answer?.isCorrect)}
        />
      )) ?? <LottieAnimation />}
    </GameLayout>
  );
}

export default GameArea;
