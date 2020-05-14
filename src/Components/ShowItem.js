import React from 'react'
import { Link } from 'react-router-dom'

export const ShowItem = ({ show }) => {
  return (

    <Link to={`/shows/${show.show_id}`}>
      <div className='show-item'>
      
        <h2>
          {show.title} ({show.release_year})
        </h2>

        <p>Country: {show.country.join(", ")}</p>
        <p>Director: {show.director.join(", ")}</p>
        
        <p>
          {show.type}
        </p>        

      </div>
    </Link>
    
  )
}