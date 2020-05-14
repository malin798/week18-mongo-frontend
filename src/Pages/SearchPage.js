import React from 'react'
import { Shows } from '../Components/Shows'
import Image from '../Images/jeshoots-com-PpYOQgsZDM4-unsplash.jpg'

export const SearchPage= () => {

  const link = `https://malins-movie-api.herokuapp.com/shows/`
 
  return (
    <>
      < Shows 
        show="Search results"
        image={Image} 
        link={link}
      />
    </>
  )
}