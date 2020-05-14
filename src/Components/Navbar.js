import React from 'react'
import { NavLink } from 'react-router-dom'
import { Searchbar } from './Searchbar'

export const Navbar = () => {

  return (
 
      <section className='navbar'>

        <section className='navlinks'>
          <NavLink exact to="/">
            All shows /
          </NavLink>

          <NavLink exact to='/movies'>
            Movies /
          </NavLink>

          <NavLink exact to='/tv show'>
            Tv-shows
          </NavLink>
        </section>

        < Searchbar />

      </section>

  )
}