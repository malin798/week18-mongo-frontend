import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Homepage } from './Pages/Homepage'
import { Navbar } from './Components/Navbar'
import { Shows } from './Pages/Shows'
import { SelectedShow } from 'Pages/SelectedShow'
import TvshowImage from 'Images/kilyan-sockalingum-nW1n9eNHOsc-unsplash.jpg'
import MovieImage from 'Images/rod-long-IzR5fJC9Eso-unsplash.jpg'

export const App = () => {
  return (
    <Router>

      < Navbar />

    <Switch>

      <Route exact path="/" >
       <Homepage />
      </Route>

      <Route exact path="/shows">
       < Shows />
      </Route>

      <Route exact path="/shows/:id">
       < SelectedShow />
      </Route>

      <Route exact path="/tvshows">
       <Shows 
        show="Tv-shows"
        image={TvshowImage} 
        link="https://malins-movie-api.herokuapp.com/categories/tv show"
        />
      </Route>

      <Route exact path="/movies">
        <Shows 
          show="Movies"
          image={MovieImage} 
          link="https://malins-movie-api.herokuapp.com/categories/movie"     
        />
      </Route>

    </Switch>
    </Router>
  )
}
