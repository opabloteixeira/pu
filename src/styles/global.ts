import { createGlobalStyle } from 'styled-components';

import { colors } from './theme';

const { black } = colors;


const genericFontStyle = {
  'line-height': 'normal',
  'color': `${black}`,
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Inter', sans-serif;
  }
  body  {
    background: cyan;
  }

  h1 {
    font-size: 28px;
    font-weight: 700;
    ${genericFontStyle}
  }
  
  h2 {
    font-size: 24px;
    font-weight: 700;
    ${genericFontStyle}
  }
  
  h3 {
    font-size: 20px;
    font-weight: 700;
    ${genericFontStyle}
  }
  
  h4 {
    font-size: 18px;
    font-weight: 700;
    ${genericFontStyle}
  }

  strong {
    font-size: 14px;
    font-weight: 600;
    ${genericFontStyle}
  }

  p {
    font-size: 14px;
    font-weight: 500;
    ${genericFontStyle}
  }

  span {
    font-size: 14px;
    font-weight: 400;
    ${genericFontStyle}
  }

  b {
    font-size: 12px;
    font-weight: 500;
    ${genericFontStyle}
  }

  small {
    font-size: 12px;
    font-weight: 400;
    ${genericFontStyle}
  }

`;

export default GlobalStyle;
