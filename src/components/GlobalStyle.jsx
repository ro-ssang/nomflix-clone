import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const theme = {
  $black: '#141414',
  $lightBlack: '#2b2b2b',
  $white: '#fff',
  $red: '#e50914',
};

export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.$black};
    color: ${(props) => props.theme.$white};
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.$white};
  }
  button {
    color: ${(props) => props.theme.$white};
    font-size: 16px;
    font-family: inherit;
  }
`;
