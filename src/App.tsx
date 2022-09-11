import React from 'react';
import Start from 'pages/Start';
import GameArea from 'pages/GameArea';
import GameOver from 'pages/GameOver';
import AppRoutes from 'common/modules/routes';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
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
