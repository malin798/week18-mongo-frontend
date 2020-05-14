import React from 'react'
import Lottie from 'react-lottie';
import animationData from './Lottie/searchask-loop.json'

export const NoresultsAnimation = () =>  {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };

  return(
    <div className="no-results-animation">
      <Lottie options={defaultOptions}
      />
    </div>
  )
}