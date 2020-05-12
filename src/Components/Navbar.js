import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (

    <section className="navbar">

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
  )
}