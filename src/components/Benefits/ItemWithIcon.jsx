import React from 'react'
import { IconContainer, Item } from './style'

export default function ItemWithIcon({icon, iconBg, text}) {
  return (
    <Item>
      <IconContainer iconBg={iconBg} >
        {icon} 
      </IconContainer>
      {text}
    </Item>
  )
}
