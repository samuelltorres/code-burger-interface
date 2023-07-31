import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  background: #fff;

  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Line = styled.div`
  width: 0.5px;
  height: 41px;
  background: #bababa;
  margin: 0px 10px;
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#9758a6' : '#555')};
  font-size: 16px;
  line-height: 19px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`

export const ContainerText = styled.div`
  p {
    color: #555;
    font-size: 14px;
    font-weight: 300;
  }

  div {
    display: flex;
    gap: 10px;
  }
`

export const PageLinkExit = styled.a`
  color: #9758a6;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`
