import React from 'react'
import { AddressFormContainer } from './style'
import { Input } from '../../../../components/Input'
import { useFormContext } from 'react-hook-form'


export default function AddressForm() {
  const { register } = useFormContext()

  return (
    <AddressFormContainer>
      <Input placeholder='CEP' type='number' className='cep' {...register("cep")} />
      <Input placeholder='Rua' className='street' />
      <Input placeholder='Numero' type='number' />
      <Input placeholder='Complemento' className='complement' />
      <Input placeholder='Bairro' />
      <Input placeholder='Cidade' />
      <Input placeholder='UF' />
    </AddressFormContainer>
  )
}
