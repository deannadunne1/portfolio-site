import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import Home from './home'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default withRouter(Routes)
