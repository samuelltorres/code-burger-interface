import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Products from '../containers/Products'
import Register from '../containers/Register'
import PrivateRoute from './private-route'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route Component={Login} path="/login" />
        <Route Component={Register} path="/cadastro" />
        <Route element={<PrivateRoute />}>
          <Route element={<Home />} path="/" exact />
          <Route element={<Products />} path="/produtos" exact />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes
