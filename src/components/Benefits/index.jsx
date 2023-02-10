import React from 'react'
import ItemWithIcon from './ItemWithIcon'
import { BenefitsContainer, Item, ItemsContainer } from './style'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

export default function Benefits() {

  const theme = useTheme()

  return (
    <BenefitsContainer>
      <ItemWithIcon icon={<ShoppingCart weight="fill" />} 
                    iconBg={theme.colors['yellow-dark']} 
                    text="Compra simples e segura" 
      />
      
      <ItemWithIcon icon={<Package weight="fill" />} 
                    iconBg={theme.colors['base-text']} 
                    text="Embalagem matém o café intacto" 
      />
      
      <ItemWithIcon icon={<Timer weight="fill" />} 
                    iconBg={theme.colors['yellow']} 
                    text="Entrega rápida e restreada" 
      />
      
      <ItemWithIcon icon={<Coffee weight="fill" />} 
                    iconBg={theme.colors['purple']} 
                    text="O café chega fresquinho até você" 
      />
    </BenefitsContainer>
  )
}

