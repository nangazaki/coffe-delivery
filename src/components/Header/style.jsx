import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div{

    &:last-child {
      display: flex;
      justify-content: space-between;
      gap: 8px;
    }
  }
`;

export const Location = styled.span`
  padding: 8px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colorsProduct.purpleLight};
  color: ${({ theme }) => theme.colorsProduct.purpleDark};

  img {
    width: 22px;
    height: 22px;
  }
`;

export const Cart = styled.span`
  padding: 8px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colorsProduct.yellowLight};
  color: ${({ theme }) => theme.colorsProduct.yellowDark};

  img {
    width: 22px;
    height: 22px;
  }
`;