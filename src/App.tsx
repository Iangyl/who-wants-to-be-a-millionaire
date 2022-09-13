import React from 'react';
import Start from 'pages/Start';
import data from 'game-config.json';
import GameArea from 'pages/GameArea';
import GameOver from 'pages/GameOver';
import AppRoutes from 'common/modules/routes';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { IPrize, loadData } from 'common/modules/redux/slices/gameSlice';
import { useAppDispatch, useAppSelector } from 'common/modules/redux/hooks';

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.game);

  const getData = React.useCallback(() => {
    const prizes: IPrize[] = data?.prizes.map((prize) => {
      return { value: prize, status: 'next' };
    });
    const currency = data?.currency;
    const questions = data?.data;
    dispatch(
      loadData({
        currency,
        prizes,
        questions,
      })
    );
  }, [data?.currency, data?.data, data?.prizes]);

  React.useEffect(() => {
    getData();
  }, [getData]);

  React.useEffect(() => {
    if (state?.finishStatus === 'win')
      setTimeout(() => navigate(AppRoutes.END_PAGE), 3000);
  }, [state?.finishStatus]);

  return (
    <Routes>
      <Route path={AppRoutes.START_PAGE} element={<Start />} />
      <Route path={AppRoutes.GAME_PAGE} element={<GameArea />} />
      <Route path={AppRoutes.END_PAGE} element={<GameOver />} />
      <Route path="*" element={<Navigate to={AppRoutes.START_PAGE} />} />
    </Routes>
  );
}

export default App;
