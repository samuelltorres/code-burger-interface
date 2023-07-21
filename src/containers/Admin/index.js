import React from 'react'
import { useLocation } from 'react-router-dom'

import PropTypes from 'prop-types'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import ListProducts from './ListProducts'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin() {
  const { pathname: locationPathname } = useLocation()
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>
        {locationPathname === paths.ListOrders && <Orders />}
        {locationPathname === paths.ListProducts && <ListProducts />}
      </ContainerItems>
    </Container>
  )
}

Admin.propTypes = {
  pathname: PropTypes.string
}
