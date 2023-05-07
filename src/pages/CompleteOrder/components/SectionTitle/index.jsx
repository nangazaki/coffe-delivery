import React from 'react'
import { SectionTitleContainer } from './style'

export default function SectionTitle({ title, subtitle, icon }) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <h5>{title}</h5>
        <span>{subtitle}</span>
      </div>
    </SectionTitleContainer>
  )
}
