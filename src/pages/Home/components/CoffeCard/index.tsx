import React, { useState } from 'react'
import { CoffeCardContainer, Name, Description, Tags, CardFooter, AddCartWrapper } from './style'

import QuantityInput from '../../../../components/QuantityInput'
import { ShoppingCart } from 'phosphor-react'
import { useCart } from '../../../../hooks/useCart'

export interface Coffee {
  id: number,
  tags: string[],
  name: string,
  description: string,
  photo: string,
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}


export default function CoffeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease(){
    setQuantity((state) => state + 1)
  }

  function handleDecrease(){
    setQuantity((state) => state - 1)
  }

  const {addCoffeeInCart} = useCart();

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }

    addCoffeeInCart(coffeeToAdd)
  }

  return (
    <CoffeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />
      <Tags>
        {coffee.tags.map(tag => {
          return <>
            <span key={`${coffee.name}${tag}`}>{tag}</span>
          </>
        })}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <CardFooter>
        <div>
          <h3>{coffee.price}</h3>
          <span>AOA</span>
        </div>
        <AddCartWrapper>
          <QuantityInput 
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart fontSize={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeCardContainer>
  )
}
