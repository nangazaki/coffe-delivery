import styled from "styled-components";

export const CompleteOrderContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px;
  margin-bottom: .625rem; 
`
