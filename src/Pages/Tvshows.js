import React from 'react'
import { Shows } from '../Components/Shows'
import TvshowImage from 'Images/kilyan-sockalingum-nW1n9eNHOsc-unsplash.jpg'

export const Tvshows = () => {
  return (
    <>   
      
      <Shows 
        show="Tv-shows"
        image={TvshowImage} 
        link="https://malins-movie-api.herokuapp.com/categories/tv show"
        />
     
    </>
  )
}