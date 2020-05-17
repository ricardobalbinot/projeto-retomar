import { createGlobalStyle } from 'styled-components';

import BackgroundImage from '../images/background.png';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #015C91  url(${BackgroundImage}) no-repeat ;
    background-size: 100vw 100vh;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
    color: #fff;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
