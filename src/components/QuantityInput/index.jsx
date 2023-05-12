import { Minus, Plus } from 'phosphor-react'
import React from 'react'
import { IconWrapper, QuantityInputContainer } from './style'

export default function QuantityInput({ onIncrease, onDecrease, quantity }) {
  return (
    <QuantityInputContainer>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
