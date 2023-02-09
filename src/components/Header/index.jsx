import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerStyled } from '../../style/GlobalStyle.style'
import { HeaderStyled, Location, Cart } from "./style"
import Logo from "../../assets/Logo.svg"
import IconLocation from "../../assets/IconLocation.svg"
import IconCart from "../../assets/IconCart.svg"

export default function Header() {
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
            <Location> 
              <img src={IconLocation} alt="Icone localização" /> 
              Porto Alegre, RS
            </Location>
            <Cart>
              <img src={IconCart} alt="Icone carrinho" />
            </Cart>
          </div>
        </HeaderStyled>
      </ContainerStyled>
    </>
  )
}
