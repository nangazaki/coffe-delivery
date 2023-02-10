import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from "../../assets/Logo.svg"
import { ContainerStyled } from '../../style/global'
import { HeaderStyled, IconHeader } from "./style"

export default function Header() {

  const theme = useTheme()

  return (
    <>
      <ContainerStyled>
        <HeaderStyled>
          <div>
            <Link>
              <img src={Logo} alt="Logotipo Coffe Delivery" />
            </Link>
          </div>

          <div>
            <IconHeader fontSize={theme.fontSizes['text-s']} bgColor={theme.colors['purple-light']} color={theme.colors['purple-dark']}> 
              <MapPin weight='fill' color={theme.colors['purple-dark']} size={22} /> Luanda, LD
            </IconHeader>
            <IconHeader fontSize={theme.fontSizes['text-s']} bgColor={theme.colors['purple-light']} color={theme.colors['purple-dark']}>
              <ShoppingCart weight='fill' color={theme.colors['yellow-dark']} size={22} />
            </IconHeader>
          </div>
        </HeaderStyled>
      </ContainerStyled>
    </>
  )
}
