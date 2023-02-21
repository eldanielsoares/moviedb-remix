/* Reset CSS */
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,body {
    width: 100%;
    min-height: 100%;

    background-color: #f5f5f5;
  }

  body{
    font-family: 'Poppins';
    font-size: 1rem;
    color: #222;
  }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: bold;
      line-height: 1.2;
    }

 a {
  text-decoration: none;
  color: inherit;
}

 ul {
   list-style: none;
 }

`


export default GlobalStyle;

