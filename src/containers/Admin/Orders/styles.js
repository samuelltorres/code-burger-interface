import ReactSelect from 'react-select'

import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  /* min-height: 100vh; */
`

export const ProductsImg = styled.img`
  width: 60px;
  border-radius: 5px;
`

export const ReactSelectStyle = styled(ReactSelect)`
  width: 250px;

  .css-13cymwt-control {
    cursor: pointer;
  }
`

export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;
`

export const LinkMenu = styled.a`
  cursor: pointer;
  color: #323d5d;
  padding: 13px;
  font-weight: ${props => (props.isActiveStatus ? 'bold' : 'normal')};
  border-bottom: ${props => props.isActiveStatus && '2px solid #9758A6'};
`
