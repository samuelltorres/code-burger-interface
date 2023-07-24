import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    border-radius: 10px;
    background: #565656;
    padding: 30px;
  }
`

export const Label = styled.p`
  font-size: 14px;
  color: #fff;
  margin-bottom: 3px;
`

export const Input = styled.input`
  width: 100%;
  height: 50px;

  background: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.1);

  margin-bottom: 22px;

  /* color: #333;
  font-size: 16px;
  font-weight: 400; */
`

export const ButtonStyles = styled(Button)`
  width: 100%;
  height: 48px;
  margin-top: 120px;
`
