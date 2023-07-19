import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Header } from '../components'

function PrivateRoute({ component, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')

  return !user ? (
    <Navigate to="/login" />
  ) : (
    <>
      {' '}
      <Header /> <Outlet />
    </>
  )
}
export default PrivateRoute

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
