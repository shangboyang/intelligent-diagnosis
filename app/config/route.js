import React, {Component } from 'react'
import { Router, Route, IndexRoute, browserHistory, hashHistory, applyRouterMiddleware } from 'react-router'
import { useScroll } from 'react-router-scroll'
import App from '../containers/App'
import ListView from '../containers/ListView'
import Home from '../containers/Home'
import Foreign from '../containers/Foreign'
import About from '../containers/About'

const config = [
  {
    path: '/',
    component: App,
    // default index
    indexRoute: {
      component: Home
    },
    childRoutes: [
      { path: '/home', name: 'home', component: Home },
      { path: '/foreign', name: 'foreign', component: Foreign },
      { path: '/about', name: 'about', component: About },
      // { path: '/list', name: 'list', component: ListView },
    ]
  }
]

const route = (
  <Router
    history={hashHistory}
    routes={config}
    render={applyRouterMiddleware(useScroll())}>
  </Router>
)


export default route
