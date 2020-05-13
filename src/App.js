import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Homepage } from './Pages/Homepage'
import { Movies } from './Pages/Movies'
import { Navbar } from './Components/Navbar'
import { SelectedShow } from 'Pages/SelectedShow'
import { Tvshows } from 'Pages/Tvshows';

export const App = () => {
  return (
    <Router>

      < Navbar />

    <Switch>

      <Route exact path="/" >
       <Homepage />
      </Route>

      <Route exact path="/shows/:id">
       < SelectedShow />
      </Route>

      <Route exact path="/tvshows">
        < Tvshows />
      </Route>

      <Route exact path="/movies">
        < Movies />
      </Route>

    </Switch>
    </Router>
  )
}
