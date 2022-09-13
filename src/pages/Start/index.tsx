import React from 'react';
import AppRoutes from 'common/modules/routes';
import { useNavigate } from 'react-router-dom';
import GeneralLayout from 'common/components/Layouts/GeneralLayout';

const title = 'Who wants to be a millionaire?';

function Start() {
  const navigate = useNavigate();

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
