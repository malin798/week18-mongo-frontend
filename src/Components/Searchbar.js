import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

export const Searchbar = () => {

  const history = useHistory()
  const [searchValue, setSearchValue] = useState("")
  
  const handleSearch = (event) => {
    event.preventDefault()
    setSearchValue("")
    history.push(`/search/?title=${searchValue}`)
  }

  return (

    <form className='search'>
      <input 
        type='text'
        name='search'
        value={searchValue} 
        placeholder='Search shows'
        onChange={event => setSearchValue(event.target.value)}
      />

      <button type="submit" onClick={(event) => handleSearch(event)}>Search</button>
    </form>
  
  )
}
