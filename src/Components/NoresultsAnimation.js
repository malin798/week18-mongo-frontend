import React from 'react'
import Lottie from 'react-lottie'
import animationData from './Lottie/searchask-loop.json'

export const NoresultsAnimation = ({image}) =>  {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };

  return(
   
    <div className='no-results' style={{backgroundImage: `url(${image})`}}>

      <h2>
        No results to show! 
      </h2>

      <div className='no-results-animation'>
        < Lottie options={defaultOptions} />
      </div>

    </div>
  )
}