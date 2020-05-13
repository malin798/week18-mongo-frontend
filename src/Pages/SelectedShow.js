import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Image from '../Images/zach-vessels-9DLmi4XeUB0-unsplash.jpg'

export const SelectedShow = () => {
  const [selectedShow, setSelectedShow] = useState("")
  const params = useParams();
  
  useEffect(() => {
     fetch(`https://malins-movie-api.herokuapp.com/shows/${params.id}`)
    .then(res => res.json())
    .then(show => setSelectedShow(show))
  }, [params.id])
  
  console.log(selectedShow)

  if (selectedShow === "") {
    return (
      <p>Loading</p>
    )
  } else {
    return (

      <section 
        className="selected-show-container"
        style={{backgroundImage: `url(${Image})`}}
      >
        <div className="selected-show-details">

          <h2>{selectedShow.title} ({selectedShow.release_year})</h2> 
          <h3>{selectedShow.description}</h3>
          <p>Director: {selectedShow.director.length === 0? "Unknown" : selectedShow.director.join(", ")}</p>
          <p>Cast: {selectedShow.cast.join(", ")}</p>
          <p>Country: {selectedShow.country !== "" ? selectedShow.country : "Unknown" }</p>
          <p>Type: {selectedShow.type}</p>

        </div>
      </section>
    )
  }
}