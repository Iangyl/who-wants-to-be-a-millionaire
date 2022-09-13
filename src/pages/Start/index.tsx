import React from 'react';
import data from 'game-config.json';
import AppRoutes from 'common/modules/routes';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'common/modules/redux/hooks';
import { loadData } from 'common/modules/redux/slices/gameSlice';
import GeneralLayout from 'common/components/Layouts/GeneralLayout';

const title = 'Who wants to be a millionaire?';

function Start() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.game);

  const handleClick = () => {
    navigate(AppRoutes.GAME_PAGE);
  };

  React.useEffect(() => {
    dispatch(
      loadData({
        currency: data?.currency,
        prizes: data?.prizes,
        questions: data?.data,
      })
    );
  }, [state]);

  return (
    <GeneralLayout
      title={title}
      layoutType="start"
      buttonOptions={{ value: 'Start Game', onClick: handleClick }}
    />
  );
}

export default Start;
