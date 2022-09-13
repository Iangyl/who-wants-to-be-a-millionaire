import React from 'react';
import AppRoutes from 'common/modules/routes';
import { useNavigate } from 'react-router-dom';
import { reset } from 'common/modules/redux/slices/gameSlice';
import GeneralLayout from 'common/components/Layouts/GeneralLayout';
import { useAppDispatch, useAppSelector } from 'common/modules/redux/hooks';

function GameOver() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.game);

  const handleClick = () => {
    navigate(AppRoutes.GAME_PAGE);
    dispatch(reset());
  };

  const title = React.useMemo(() => {
    return `$${state?.score} earned`;
  }, [state?.score]);

  return (
    <GeneralLayout
      title={title}
      score={state?.score}
      gameStatus={state?.finishStatus}
      layoutType="end"
      buttonOptions={{ value: 'Try again', onClick: handleClick }}
    />
  );
}

export default GameOver;
