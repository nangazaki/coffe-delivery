import styled from "styled-components";

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: .5rem;
  margin-bottom: 2rem;  

  h5 {
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    font-size: ${({ theme }) => theme.fontSizes["text-m"]};
    font-weight: 400;
  }

  span {
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: ${({ theme }) => theme.fontSizes["text-s"]};
    font-weight: 400;
  }
`