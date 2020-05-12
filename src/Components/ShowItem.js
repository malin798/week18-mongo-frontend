import React from 'react'
import { Link } from "react-router-dom";

export const ShowItem = ({ show }) => {
  return (

    <Link to={`/shows/${show.show_id}`}>
      <div className="show-item">
      
        <h2>
          {show.title}
        </h2>

        <p>
          {show.type}
        </p>

        <p>
          {show.country === ""? "" : `${show.country}, `} {show.release_year}
        </p>
        

      </div>
    </Link>
    
  )
}