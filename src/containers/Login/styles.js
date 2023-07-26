import styled from 'styled-components'

import BackgroundImage from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${BackgroundImage}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 70%;
`

export const ContainerItens = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #fff;
    text-align: center;
    margin-top: 119px;
  }

  form {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export const Label = styled.p`
  font-style: normal;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  line-height: normal;
  margin-top: 16px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.416px;
  height: 38.319px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '1px solid #CC1717' : 'none')};
  padding-left: 10px;
`

export const SignInLink = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  a {
    cursor: pointer;
    text-decoration-line: underline;
  }
`
