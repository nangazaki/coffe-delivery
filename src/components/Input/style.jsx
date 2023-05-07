import styled from 'styled-components'

export const InputStyleContainer = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background: ${({ theme }) => theme.colors['base-input']};
  transition: .4s;

  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  padding: 0.75rem;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  } 

  &:focus {
    border-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`