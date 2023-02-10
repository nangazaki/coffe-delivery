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

export const IconHeader = styled.span`
  padding: 8px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
`;
