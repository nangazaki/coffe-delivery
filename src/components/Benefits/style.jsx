import styled from "styled-components";

export const BenefitsContainer = styled.div`
  max-width: 580px;
  width: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['text-m']};
  color: ${({ theme }) => theme.colors['base-text']};
  display: flex;
  align-items: center;
  gap: 12px;
  width: 240px;
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  min-height: 32px;
  border-radius: 50%;
  background-color: ${props => props.iconBg};
  color: ${({ theme }) => theme.colors['base-white']};
`;

export const ItemsContainer = styled.div`
  display: flex;
  gap: 40px;
`;