
import { createGlobalStyle } from "styled-components";
import Jua from '../assets/fonts/jua/Jua.woff2'

const GlobalStyle = createGlobalStyle `
  @font-face {
    font-family: jua;
    src: url(${Jua}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`

export const fonts = {
  title: "Jua",
  main: "Cabin, sans-serif",
  secondary: "Aileron, cursive",
}

export const colors = {
  LinearGradiant1: "#86A3BE",
  HTMLColor: "#F5F5F5",
  ColorTitleAndItems: "#F0F0F0",
  ColorTitleAndDescriptionCard: "#000",
}

export const breakpoints = {
  sm: 'screen and (max-width: 640px)',
  md: 'screen and (max-width: 768px)',
  lg: 'screen and (max-width: 1024px)',
  xl: 'screen and (max-width: 1280px)',
  xxl: 'screen and (min-width: 1280px)',
}

export const margin = {
  mgFit: "0px"
}

export const padding = {
  pdFit: "0px"
}

export default GlobalStyle