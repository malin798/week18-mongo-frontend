import React from 'react'
import { Shows } from '../Components/Shows'
import TvshowImage from 'Images/kilyan-sockalingum-nW1n9eNHOsc-unsplash.jpg'

export const Tvshows = ({link}) => {
  return (

      <Shows 
        show='Tv-shows'
        image={TvshowImage} 
        link={link}
      />
    
  )
}