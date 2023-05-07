import styled from "styled-components"
import { SectionBaseStyle } from "../../style"

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['title-xs']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-family: ${({ theme }) => theme.fonts['title']};
    font-stretch: condensed;
    line-height: 130%;
    margin-bottom: 1rem;
  }
`

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors['base-text']};

    .regular-m {
      font-size: ${({ theme }) => theme.fontSizes['text-s']};
    }

    .bold-l {
      font-size: ${({ theme }) => theme.fontSizes['text-l']};
      color: ${({ theme }) => theme.colors['base-subtitle']};
      font-weight: 500;
    }
  }
`