import styled from "styled-components"

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors['yellow-dark']};
    font-size: ${({ theme }) => theme.fontSizes['title-l']};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  @media (max-width: 1024px) {
    > section {
      flex-direction: column;
      gap: 3rem;

      img {
        order: 1;
      }
    }  
  }
`

export const OrderConfirmedDetails = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  background: ${({ theme }) => theme.colors['base-background']};
  max-width: 32rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px;
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);


  }
`

export const RegularText = styled.p`
`