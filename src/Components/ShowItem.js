import React from 'react'
import { Link } from "react-router-dom";

export const ShowItem = ({ show }) => {
  return (

    <Link exact to={`/shows/${show.show_id}`}>
      <div className="show-item">
      
        <h2>
          {show.title} ({show.release_year})
        </h2>

        {show.country ? <p>Country: {show.country}</p> : <p>Director: {show.director}</p>} 
        
        <p>
          {show.type}
        </p>        

      </div>
    </Link>
    
  )
}