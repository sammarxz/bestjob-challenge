import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home, Game } from './pages'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/game" component={Game} />
    </Switch>
  </BrowserRouter>
)

export default Routes
