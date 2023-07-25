import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import PrivateRoute from './private-route'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route Component={Login} path={paths.Login} />
        <Route Component={Register} path={paths.Register} />

        <Route element={<PrivateRoute />}>
          <Route element={<Home />} path={paths.Home} exact />
          <Route element={<Products />} path={paths.Products} exact />
          <Route element={<Cart />} path={paths.Cart} exact />
        </Route>

        <Route element={<PrivateRoute isAdmin />}>
          <Route element={<Admin />} path={paths.ListOrders} exact />
          <Route element={<Admin />} path={paths.ListProducts} exact />
          <Route element={<Admin />} path={paths.NewProduct} exact />
          <Route element={<Admin />} path={paths.EditProduct} exact />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes
