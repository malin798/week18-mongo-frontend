import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Image from '../Images/kilyan-sockalingum-nW1n9eNHOsc-unsplash.jpg'
import { LoadAnimation } from 'Components/LoadAnimation'

export const SelectedShow = () => {
  const [selectedShow, setSelectedShow] = useState("")
  const params = useParams();
  
  useEffect(() => {
     fetch(`https://malins-movie-api.herokuapp.com/shows/${params.id}`)
    .then(res => res.json())
    .then(show => setSelectedShow(show))
  }, [params.id])
  
  if (selectedShow === "") {
    return (
      <div className='loading-animation'>
        < LoadAnimation />
      </div>
    )
  } else {
    return (

      <section 
        className='selected-show-container'
        style={{backgroundImage: `url(${Image})`}}
      >
        <div className='selected-show-details-container'>

          <h2>{selectedShow.title} ({selectedShow.release_year})</h2> 
          <h3>{selectedShow.description}</h3>

          <div className='selected-show-details'>
            <span>
              <p className='bold'>Director:</p>
              <p>{selectedShow.director.join(", ")}</p>
            </span>
            
            <span>
              <p className='bold'>Cast: </p>
              <p>{selectedShow.cast.join(", ")}</p>
            </span>

            <span>
              <p className='bold'>Country: </p>
              <p>{selectedShow.country.join(", ")}</p>
            </span>

            <span>
              <p className='bold'>Type: </p>
              <p>{selectedShow.type}</p>
            </span>
          </div>

        </div>
      </section>
    )
  }
}