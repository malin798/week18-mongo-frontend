import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ShowItem } from './ShowItem'
import { PageNavigator } from './PageNavigator'
import { LoadAnimation } from './LoadAnimation'
import { NoresultsAnimation } from './NoresultsAnimation'

export const Shows = ({show, image, link}) => {

  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [maxPages, setMaxPages] = useState()
  const [totalShows, setTotalShows] = useState()
  const [allShows, setAllShows] = useState("")
  const location = useLocation()

  if (location.search) {
    link = `${link}${location.search}&page=${page}`
  } else {
    link = `${link}/?page=${page}`
  }

  useEffect(() => {

    setLoading(true)
    fetch(link)
    .then(response => {
      if (!response.ok) {
        throw new Error(response) 
      }
      return response.json()
    })
    .then(shows => {
      setMaxPages(shows.maxPages)
      setTotalShows(shows.totalShows)
      setAllShows(shows.results)
      setError(false)
      setLoading(false)
    }).catch(error => {
      setError(true)
      setLoading(false)
    }) 
  }, [page, link, location.search])

  if (allShows === "" || loading === true) {
    return (
      <div className='loading-animation'>
        < LoadAnimation />
      </div>
    )
  } else if (allShows === undefined || error === true) {
    return (

        < NoresultsAnimation image={image} />

    )
  } else {
    return (
    
      <section 
        className='all-shows-container'
        style={{backgroundImage: `url(${image})`}}
      >
  
        <h2>{show} - {totalShows} results</h2>
  
        <div className='all-shows'>
  
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