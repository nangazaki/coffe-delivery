import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from 'styled-components'

import { HeaderStyled, Icon } from "./style"
import { MapPin, ShoppingCart } from 'phosphor-react'

import Logo from "../../assets/Logo.svg"

export default function Header() {
  const theme = useTheme()

  return (
    <>
      <HeaderStyled>
        <div className='container flex'>
          <div>
            <Link to='/'>
              <img src={Logo} alt="Logotipo Coffe Delivery" />
            </Link>
          </div>

          <div className='header-right'>
            <Icon fontSize={theme.fontSizes['text-s']} bgColor={theme.colors['purple-light']} color={theme.colors['purple-dark']}>
              <MapPin weight='fill' color={theme.colors['purple-dark']} size={22} /> Luanda, LD
            </Icon>
            <Link to='/complete-order'>
              <Icon fontSize={theme.fontSizes['text-s']} bgColor={theme.colors['yellow-light']} color={theme.colors['yellow-dark']}>
                <ShoppingCart weight='fill' color={theme.colors['yellow-dark']} size={22} />
              </Icon>
            </Link>
          </div>
        </div>
      </HeaderStyled>
    </>
  )
}
