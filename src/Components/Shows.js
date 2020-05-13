import React, { useEffect, useState } from 'react';
import { ShowItem } from './ShowItem';

export const Shows = ({show, image, link}) => {

  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState();
  const [totalShows, setTotalShows] = useState();
  const [allShows, setAllShows] = useState("");
  
  useEffect(() => {
    fetch(`${link}?page=${page}`)
    .then(response => response.json())
    .then(shows => {
      setMaxPages(shows.maxPages)
      setTotalShows(shows.totalShows)
      setAllShows(shows.results)
    })  
  }, [page, link])

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
        <h2>{show} - {totalShows} results</h2>
  
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

            <button className={page < 3 && "hidden"} disabled={page < 3} onClick={() => setPage(1)}>&lt;&lt;</button>
            <button className={page < 2 && "hidden"} disabled={page < 2} onClick={() => setPage(page -1)}>&lt;</button>
            <p>Page {page} / {maxPages}</p>
            <button onClick={() => setPage(page +1)}>&gt;</button>
            <button onClick={() => setPage(maxPages)}>&gt;&gt;</button>
            
          </section>
         
  
      </section>
   
    )
  }
}