import React from 'react'
import { Shows } from './Shows'
import Image from 'Images/jeshoots-com-PpYOQgsZDM4-unsplash.jpg'

export const Homepage = () => {
  return (
    <div 
      className="homepage">   
      
      < Shows 
        show="All shows"
        link="https://malins-movie-api.herokuapp.com/shows" 
        image={Image}
      />
     
    </div>
  )
}