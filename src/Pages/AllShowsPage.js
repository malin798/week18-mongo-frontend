import React from 'react'
import { Shows } from '../Components/Shows'
import Image from 'Images/jeshoots-com-PpYOQgsZDM4-unsplash.jpg'

export const AllShowsPage = ({link}) => {
  return (
    <>   
      
      < Shows 
        show="All shows"
        link={link}
        image={Image}
      />
     
    </>
  )
}