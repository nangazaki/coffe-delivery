import React from 'react'
import { ContainerStyled } from '../../style/GlobalStyle.style'
import { Background, HeroSection, TextGroup, Text } from './style'
import img from "../../assets/Imagem.png"

export default function Hero() {
  return (
    <Background>
      <ContainerStyled>
        <HeroSection>
          <TextGroup>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <Text>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Text>
          </TextGroup>
          <img src={img} />
        </HeroSection>
      </ContainerStyled>
    </Background>
  )
}
