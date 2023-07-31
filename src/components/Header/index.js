import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'

import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  ContainerText,
  Line,
  PageLinkExit
} from './styles'

export function Header() {
  const { logout, userData } = useUser()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  console.log(userData.admin)

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  const adminPanel = () => {
    navigate('/pedidos')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => navigate('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          <img
            src={Cart}
            alt="logo-carrinho"
            onClick={() => navigate('/carrinho')}
          />
        </PageLink>

        <Line />

        <PageLink>
          <img src={Person} alt="logo-usuario" />
        </PageLink>

        <ContainerText>
          <p>Olá, {userData.name}</p>
          <div>
            {userData.admin && (
              <PageLinkExit onClick={adminPanel}>Admin</PageLinkExit>
            )}
            <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
          </div>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
