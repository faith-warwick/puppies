import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import LandingPage from './pages/landingPage/LandingPage'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
)
export default Routes
