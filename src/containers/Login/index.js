import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-img.svg'
import Logo from '../../assets/logo.svg'
import Button from '../../components/Button'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  ErrorMessage,
  SignInLink,
} from './styles'

function Login() {
  const navigate = useNavigate()
  const { putUserData } = useUser()
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um email válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digitos'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password,
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo(a)! 👌',
        error: 'Verifique seu e-mail e senha 🤯',
      },
    )

    putUserData(data)
    setTimeout(() => {
      navigate('/')
    }, 500)
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItens>
        <div>
          <img src={Logo} alt="logo-codeburger" />
        </div>

        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <div>
            <Button type="submit" style={{ marginTop: 39, marginBottom: 27 }}>
              Sign In
            </Button>
          </div>
        </form>
        <SignInLink>
          Não possui conta?{' '}
          <Link to="/cadastro" style={{ color: '#9758a6' }}>
            Sign Up
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
