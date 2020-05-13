import React from 'react'
import { Shows } from '../Components/Shows'
import MovieImage from 'Images/rod-long-IzR5fJC9Eso-unsplash.jpg'

export const Movies = () => {
  return (
    <>   
      
      <Shows 
          show="Movies"
          image={MovieImage} 
          link="https://malins-movie-api.herokuapp.com/categories/movie"     
        />
     
    </>
  )
}