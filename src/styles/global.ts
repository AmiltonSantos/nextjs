import { createGlobalStyle } from 'styled-components';
import Background from '../assets/background.svg';

export default createGlobalStyle`
  :root {
    --azul: #3C4393;
    --roxo: #7159D1;
    --verde: #04d361;
    --preto: #000;
  }

  .page{
    animation: fadeIn3 0.5s;
    position: absolute;
  }

  @keyframes fadeIn3{
    0%{
      opacity: 0;
      top: 40px;
    }
    100%{
      opacity: 1;
      top: 0px;
    }
  }

  *{
    font-family: 'Roboto', sans-serif;

    ::selection {
      color: #fff;
      background-color: var(--roxo);
    }
  }

  body, html {
    background-color: #000000;
    backgroundImage: url(${Background});
    background-attachment: fixed;
    background-size: cover;
    /* background by SVGBackgrounds.com */
    overflow: hidden auto;
    scroll-behavior: smooth;
    box-sizing: border-box;
    padding:0px;
    margin:0px;
  }
`;
