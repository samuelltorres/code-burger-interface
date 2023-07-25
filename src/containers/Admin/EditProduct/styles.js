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

    display: flex;
    flex-direction: column;
    gap: 25px;

    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }
`

export const Label = styled.p`
  font-size: 14px;
  color: #fff;
  margin-bottom: 3px;
`

export const Input = styled.input`
  width: 100%;
  min-width: 280px;
  height: 50px;

  background: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.1);

  padding: 20px;

  font-size: 16px;
`

export const ButtonStyles = styled(Button)`
  width: 100%;
  height: 48px;
  margin-top: 100px;
`

export const LabelUpload = styled.label`
  cursor: pointer;
  height: 50px;

  display: flex;
  align-items: center;
  gap: 10px;

  border: 1px dashed #fff;
  border-radius: 8px;

  padding: 10px;

  color: #fff;

  input {
    opacity: 0;
    width: 1px;
  }
`
export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  input {
    width: 20px;
    height: 23px;
    cursor: pointer;
  }
`
export const LabelOffer = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 3px;
`
