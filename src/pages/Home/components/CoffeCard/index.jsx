import React from 'react'
import { CoffeCardContainer, Name, Description, Tags, CardFooter, AddCartWrapper } from './style'

import QuantityInput from '../../../../components/QuantityInput'
import { ShoppingCart } from 'phosphor-react'

export default function CoffeCard({ coffe }) {
  return (
    <CoffeCardContainer>
      <img src={`/coffes/${coffe.photo}`} />
      <Tags>
        {coffe.tags.map(tag => {
          return <>
            <span key={`${coffe.name}${tag}`}>{tag}</span>
          </>
        })}
      </Tags>
      <Name>{coffe.name}</Name>
      <Description>{coffe.description}</Description>
      <CardFooter>
        <div>
          <h3>{coffe.price}</h3>
          <span>AOA</span>
        </div>
        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart fontSize={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeCardContainer>
  )
}
