import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import CreatePost from './components/CreatePost'
import NavBar from './components/NavBar'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Dashboard} exact path="/" />
      <Route component={CreatePost} exact path="/new" />
    </Switch>
    <NavBar />
  </BrowserRouter>
)

export default Router
