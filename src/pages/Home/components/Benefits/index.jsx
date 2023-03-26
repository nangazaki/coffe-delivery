import React from 'react'
import { useTheme } from 'styled-components'

import ItemWithIcon from './ItemWithIcon'
import { BenefitsContainer } from './style'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export default function Benefits() {
  const { colors } = useTheme()

  return (
    <BenefitsContainer>
      <ItemWithIcon icon={<ShoppingCart weight="fill" />}
        iconBg={colors['yellow-dark']}
        text="Compra simples e segura"
      />

      <ItemWithIcon icon={<Package weight="fill" />}
        iconBg={colors['base-text']}
        text="Embalagem matém o café intacto"
      />

      <ItemWithIcon icon={<Timer weight="fill" />}
        iconBg={colors['yellow']}
        text="Entrega rápida e restreada"
      />

      <ItemWithIcon icon={<Coffee weight="fill" />}
        iconBg={colors['purple']}
        text="O café chega fresquinho até você"
      />
    </BenefitsContainer>
  )
}

