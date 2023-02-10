import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {

}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
}

::-moz-selection {
  background-color: #2895E2;
  color: #F8F8F8;
}

::selection {
  background-color: #2895E2;
  color: #F8F8F8;
}

body {
  font-family: 'Roboto';
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-background']};
}

a {
 
}

img {
  width: 100%;
  height: 100%;
}

h1,
h2,
h3,
h4 {
    color: ${({ theme }) => theme.colors['base-title']};
    font-family: ${({ theme }) => theme.fonts['title']};
    font-stretch: condensed;
    line-height: 130%;
}

h1 {
  font-size: ${({ theme }) => theme.fontSizes['title-xl']};
}
h2 {
  font-size: ${({ theme }) => theme.fontSizes['title-l']};
}
h3 {
  font-size: ${({ theme }) => theme.fontSizes['title-m']};
}
h4 {
  font-size: ${({ theme }) => theme.fontSizes['title-s']};
}
`;

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
`;