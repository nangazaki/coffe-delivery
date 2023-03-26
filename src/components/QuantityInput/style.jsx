import styled from "styled-components";

export const QuantityInputContainer = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;

  padding: 0 .5rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    padding: .5rem;
    color: ${({ theme }) => theme.colors["base-title"]};
    font-size: ${({ theme }) => theme.fontSizes["text-m"]};

    &:focus {
      outline: none;
    }
  }
`;

export const IconWrapper = styled.button.attrs({
  type: "button"
})
  `
  width: .875rem;
  height: .875rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors["purple"]};
  transition: .4s;

  &:disabled {
    opacity: .4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors["purple-dark"]}
  }
`