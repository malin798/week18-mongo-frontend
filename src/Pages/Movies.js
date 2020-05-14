import React from 'react'
import { Shows } from '../Components/Shows'
import MovieImage from 'Images/rod-long-IzR5fJC9Eso-unsplash.jpg'

export const Movies = ({link}) => {
  return (
       
      < Shows 
        show='Movies'
        image={MovieImage} 
        link={link}     
      />
    
  )
}