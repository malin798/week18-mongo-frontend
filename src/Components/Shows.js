import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { ShowItem } from './ShowItem';
import { PageNavigator } from './PageNavigator'
import { LottieAnimation } from './LottieAnimation'


export const Shows = ({show, image, link}) => {

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState();
  const [totalShows, setTotalShows] = useState();
  const [allShows, setAllShows] = useState("");
  const location = useLocation();
  
  console.log(allShows)

  if (location.search) {
    link = `${link}${location.search}&page=${page}`
  } else {
    link = `${link}/?page=${page}`
  }

  useEffect(() => {

    setLoading(true)
    fetch(link)
    .then(response => response.json())
    .then(shows => {
      setMaxPages(shows.maxPages)
      setTotalShows(shows.totalShows)
      setAllShows(shows.results)
      setLoading(false)
    })  
  }, [page, link, location.search])

  if (allShows === "" || loading === true) {
    return (
      <div className="loading-animation">
        < LottieAnimation />
      </div>
    )
  } else if (allShows === undefined) {
    return (
      <div className="no-results" style={{backgroundImage: `url(${image})`}}>
        <h2>
          No results to show! Why don't you try something else?
        </h2>
      </div>
    )
  } 
  
  else {
    return (
    
      <section 
        className="all-shows-container"
        style={{backgroundImage: `url(${image})`}}
      >
  
        <h2>{show} - {totalShows} results</h2>
  
        <div className="all-shows">
  
          {allShows.map((item) => {
            return (
              < ShowItem show={item} key={item.show_id} />
            )
          })}
  
         </div>

        < PageNavigator page={page} setPage={setPage} maxPages={maxPages}/>
                
      </section>
    )
  }
}