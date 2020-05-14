import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { AllShowsPage } from './Pages/AllShowsPage'
import { Movies } from './Pages/Movies'
import { Navbar } from './Components/Navbar'
import { SelectedShow } from 'Pages/SelectedShow'
import { Tvshows } from 'Pages/Tvshows'
import { SearchPage } from 'Pages/SearchPage'

export const App = () => {
  return (
    <Router>

      < Navbar />

    <Switch>

      <Route exact path='/' >
        <AllShowsPage link='https://malins-movie-api.herokuapp.com/shows' />
      </Route>

      <Route exact path='/shows/:id'>
       < SelectedShow />
      </Route>

      <Route exact path='/tv show'>
        < Tvshows link='https://malins-movie-api.herokuapp.com/categories/tv show'/>
      </Route>

      <Route exact path='/movies'>
        < Movies link='https://malins-movie-api.herokuapp.com/categories/movie'/>
      </Route>

      <Route exact path='/search'>
        < SearchPage />
      </Route>

    </Switch>
    </Router>
  )
}
