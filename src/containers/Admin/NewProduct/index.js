import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactSelect from 'react-select'

import api from '../../../services/api'
import { Container, Label, Input, ButtonStyles } from './styles'

function NewProduct() {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products')
      console.log(data)
    }

    loadOrders()
  }, [])

  return (
    <Container>
      <form noValidate>
        <Label>Nome</Label>
        <Input type="text" {...register('name')} />

        <Label>Preço</Label>
        <Input type="number" {...register('price')} />

        <Label>Upload da imagem</Label>
        <Input type="file" accept="image/png, image/jpeg" />

        <ReactSelect />

        <ButtonStyles>Adicionar produtos</ButtonStyles>
      </form>
    </Container>
  )
}

export default NewProduct
