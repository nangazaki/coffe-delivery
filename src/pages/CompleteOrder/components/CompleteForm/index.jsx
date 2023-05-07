import React from 'react'
import { useTheme } from 'styled-components'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'

import AddressForm from './AddressForm'
import SectionTitle from '../SectionTitle'
import { CompleteFormContainer, FormSectionContainer } from './style'
import PaymmentMethodOptions from './PaymentMethodOptions'

export function CompleteForm() {
  const { colors } = useTheme()

  return (
    <CompleteFormContainer>
      <h2>Complete seu pedido</h2>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors["yellow-dark"]} size={22} />}
        />

        <AddressForm />

      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar."
          icon={<CurrencyDollar color={colors["purple"]} size={22} />}
        />

        <PaymmentMethodOptions />

      </FormSectionContainer>
    </CompleteFormContainer>
  )
}
