import React from 'react'

import { FormHeaderContainer } from './style'

export default function FormHeader({ title, describe, children }) {
  return (
    <FormHeaderContainer>
      {children}
      <div>
        <h5>{title}</h5>
        <span>{describe}</span>
      </div>
    </FormHeaderContainer>
  )
}
