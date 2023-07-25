import React from 'react'
import { useLocation } from 'react-router-dom'

import PropTypes from 'prop-types'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import EditProduct from './EditProduct'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin() {
  const { pathname: locationPathname } = useLocation()
  return (
    <Container>
      <SideMenuAdmin path={locationPathname} />
      <ContainerItems>
        {locationPathname === paths.ListOrders && <Orders />}
        {locationPathname === paths.ListProducts && <ListProducts />}
        {locationPathname === paths.NewProduct && <NewProduct />}
        {locationPathname === paths.EditProduct && <EditProduct />}
      </ContainerItems>
    </Container>
  )
}

Admin.propTypes = {
  pathname: PropTypes.string
}
