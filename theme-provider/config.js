import { createGlobalStyle } from "styled-components";
export const lightTheme = {
  body: "#ffffff",
  main: "#ffffff",
  mainColor: "#FFFFFF",
  accent: "#E5DE17",
  accentColor: "#161616",
  secondary: "#FFFFFF",
  secondaryColor: "#343434",
  dullColor: "#343434",
  ternary: "#000000",
  codeColor: "#D121C5",
  text: "#000000",
};

export const GlobalStyles = createGlobalStyle`
* {
   box-sizing: border-box;
}
body {
   margin: 0;
   padding: 0;
   background: ${({ theme }) => theme.body};
   color: ${({ theme }) => theme.text};
   font-family: sans-serif !important;
   font-weight: 400;
   font-style: normal;
   transition: all 0.50s linear;
}`;
