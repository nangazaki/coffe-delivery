import React from 'react'
import CoffeCard from '../CoffeCard'
import { CoffeGrid, OurCoffesContainer } from './style'
import { coffees } from "../../../../data/coffees"

export default function OurCoffes() {
  return (
    <OurCoffesContainer className='container'>
      <h2>Nossos cafés</h2>
      <CoffeGrid>
        {coffees.map((coffee) => {
          return <>
            <CoffeCard key={coffee.id} coffee={coffee} />
          </>
        })}
      </CoffeGrid>
    </OurCoffesContainer>
  )
}
