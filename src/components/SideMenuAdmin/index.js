import React from 'react'
import { useNavigate } from 'react-router-dom'

import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PropTypes from 'prop-types'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLink } from './styles'

export function SideMenuAdmin({ path }) {
  const { logout } = useUser()

  return (
    <Container>
      <hr></hr>
      {listLinks.map(item => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr></hr>

      <ItemContainer style={{ position: 'fixed', bottom: '65px' }}>
        <HomeOutlinedIcon className="icon" />
        <ListLink to="/">Home</ListLink>
      </ItemContainer>

      <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
        <ExitToAppOutlinedIcon className="icon" />
        <ListLink to="/login" onClick={logout}>
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string
}
