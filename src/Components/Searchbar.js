import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

export const Searchbar = () => {

  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearch = () => {
     setSearchValue("")
     history.push(`/search/?title=${searchValue}`);
  }

  return (

    <section className="search">

      <input 
        type="text" 
        name="search" 
        value={searchValue} 
        placeholder="Search shows"
        onChange={event => setSearchValue(event.target.value)}
      />

      <button onClick={() => handleSearch()}>Search</button>

    </section>
  )
}
