import React from 'react';
import { useNavigate } from 'react-router-dom';
import GeneralLayout from 'common/components/Layouts/GeneralLayout';
import AppRoutes from 'common/modules/routes';

function Start() {
  const navigate = useNavigate();
  const title = 'Who wants to be a millionaire?';

  const handleClick = () => {
    navigate(AppRoutes.GAME_PAGE);
  };

  return (
    <GeneralLayout
      title={title}
      layoutType="start"
      buttonOptions={{ value: 'Start Game', onClick: handleClick }}
    />
  );
}

export default Start;
