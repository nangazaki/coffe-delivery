import styled from "styled-components"

export const CoffeeCardCartContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

> div {
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
}

> p {
  color: ${({ theme }) => theme.colors['base-text']};
  font-weight: 500;
  align-self: flex-start;
}
`

export const ActionsContaioner = styled.div`
margin-top: .5rem;
height: 2.2rem;
display: flex;
align-items: center;
gap: .5rem;

> div {
  max-width: 6rem;
}
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: .25rem;
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: .75rem;
  height: 100%;
  border: none;
  background: ${({ theme }) => theme.colors['base-button']};
  padding: 0 .5rem;
  border-radius: 6px;
  transition: .4s;

  svg {
    color: ${({ theme }) => theme.colors['purple']};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
`