import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  width: 264px;
  min-height: 100vh;
  top: 0;
  left: 0;

  hr {
    margin: 50px 15px;
    background: #e9ecef;
  }
`
export const ItemContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: ${props => (props.isActive ? '#565656' : 'none')};
  margin: 8px;
  padding-left: 20px;

  .icon {
    color: #fff;
  }
`

export const ListLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  margin-left: 12px;
`
