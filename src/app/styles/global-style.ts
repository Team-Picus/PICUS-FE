import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color:rgba(255,255,255,0);
    -webkit-touch-callout:none;
    user-select:none;
  }

  button {
    cursor: pointer;
    padding: 0;
    margin: 0;
    background: none;
    border: none;

    &:hover {
      border: none;
      outline: none;
    }

    &:focus {
      border: none;
      outline: none;
    }
  }

  :root {
    --vh: 100%;
  }

  html, body {
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  #root, body, html {
    margin: 0 auto;
    padding: 0;
  }
`;

export default GlobalStyle;