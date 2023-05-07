import styled from "styled-components"

export const ButtonContainer = styled.button`
  padding: .75rem 2.8rem;
  color: ${({ theme }) => theme.colors['base-white']};
  background: ${({ theme }) => theme.colors['yellow']};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes['components-button-g']};
  border: none;
  border-radius: 6px;
  margin-top: .7rem;
  text-transform: uppercase;
  transition: 0.4s;
  line-height: 1.3rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover{
    background: ${({ theme }) => theme.colors['yellow-dark']};
  }

`