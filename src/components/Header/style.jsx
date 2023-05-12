import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors["base-background"]};
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-right{
      display: flex;
      justify-content: space-between;
      gap: 8px;
    }
`;

export const Icon = styled.div`
  padding: 8px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  position: relative;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
    color: ${({ theme }) => theme.colors["base-white"]};
    font-size: 0.75rem;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`
