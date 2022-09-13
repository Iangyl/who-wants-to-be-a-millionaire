import React from 'react';
import Lottie from 'react-lottie';
import animationData from 'common/assets/lottie-loading.json';

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Lottie options={defaultOptions} width={200} height={200} />
  )
}

export default LottieAnimation
