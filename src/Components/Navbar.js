import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

  const handleSearch = (event) => {
    event.preventDefault();
  }

  return (
 
      <section className="navbar">

        <section className="navlinks">
          <NavLink exact to="/">
            Home /
          </NavLink>

          <NavLink exact to="/movies">
            Movies /
          </NavLink>

          <NavLink exact to="/tvshows">
            Tv-shows
          </NavLink>
        </section>

        <section className="search">
         
            <input type="text" name="search" placeholder="Search"/>
            <button onClick={event => handleSearch(event)}>Search</button>
          
        </section>

      </section>

  )
}