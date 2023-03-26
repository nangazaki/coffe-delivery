import React from 'react'
import CoffeCard from '../CoffeCard'
import { CoffeGrid, OurCoffesContainer } from './style'
import { coffes } from "../../../../data/coffes"

export default function OurCoffes() {
  return (
    <OurCoffesContainer className='container'>
      <h2>Nossos cafés</h2>
      <CoffeGrid>
        {coffes.map((coffe) => {
          return <>
            <CoffeCard key={coffe.id} coffe={coffe} />
          </>
        })}
      </CoffeGrid>
    </OurCoffesContainer>
  )
}
