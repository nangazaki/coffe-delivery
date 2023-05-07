import styled from "styled-components";
import { SectionBaseStyle } from "../../style";

export const CompleteFormContainer = styled.div`
  max-width: 40rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['title-xs']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-family: ${({ theme }) => theme.fonts['title']};
    font-stretch: condensed;
    line-height: 130%;
    margin-bottom: 1rem;
  }
`

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: .75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`;

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`
