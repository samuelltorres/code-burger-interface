import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Login, Products, Register, Cart } from '../containers'
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
          <Route element={<Cart />} path="/carrinho" exact />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes
