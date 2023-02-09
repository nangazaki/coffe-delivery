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
  background-color: ${({ theme }) => theme.colorsBase.background};
}

a {
 
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

h1,
h2,
h3,
h4 {
    color: ${({ theme }) => theme.colorsBase.title};
    font-family: 'Baloo 2';
    font-stretch: condensed;
    line-height: 130%;
}

h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 1.125rem;
}
`;

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
`;