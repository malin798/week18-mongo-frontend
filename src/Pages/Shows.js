import React, { useEffect, useState } from 'react';
import { ShowItem } from '../Components/ShowItem';

export const Shows = ({show, image, link}) => {

  const [page, setPage] = useState(1);
  const [allShows, setAllShows] = useState("");
   
  useEffect(() => {
    fetch(`${link}?page=${page}`)
    .then(response => response.json())
    .then(shows => {
      setAllShows(shows.results)
    })
    
  }, [page])

  if (allShows === "") {
    return (
      <p>Loading</p>
    )
  } else {
    return (
    
      <section 
        className="all-shows-container"
        style={{backgroundImage: `url(${image})`}}
      >
        <h2>{show}</h2>
  
        <div 
          className="all-shows"
        >
  
          {allShows.map((item) => {
            return (
              < ShowItem show={item} key={item.show_id} />
            )
          })}
  
         </div>

          <section className="page-navigator">

            <button className={page < 2 && "hidden"} disabled={page < 2} onClick={() => setPage(page -1)}>Previous page</button>
            <p>Page {page}</p>
            <button onClick={() => setPage(page +1)}>Next page</button>
            
          </section>
         
  
      </section>
   
    )
  }
}