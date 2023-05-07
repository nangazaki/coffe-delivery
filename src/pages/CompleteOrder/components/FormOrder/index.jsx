import React from 'react'

import { CurrencyDollar } from 'phosphor-react'
import FormHeader from '../FormHeader'
import { FormOrderSectionContainer } from './style'

export default function FormOder() {
  return (
    <FormOrderSectionContainer>
      <FormHeader
        title="Pagamento"
        describe="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      >
        <CurrencyDollar />
      </FormHeader>

      <div>

      </div>
    </FormOrderSectionContainer>
  )
}
