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
  background-color: ${({ theme }) => theme.colors["yellow-light"]};
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors["yellow-dark"]};
}

::-moz-selection {
  background-color: ${({ theme }) => theme.colors["yellow-dark"]};
  color: #F8F8F8;
}

::selection {
  background-color: ${({ theme }) => theme.colors["yellow-dark"]};
  color: #F8F8F8;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webikit-appearance: none;
  margin: 0;
}

input[type="button"] {
  -moz-appearance: textfield;
}

body {
  font-family: 'Roboto';
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-background']};
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

