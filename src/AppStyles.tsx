import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  ul li {
    list-style: none;
  }
html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Manrope', sans-serif;
  }

  #root {
    height: 100%;
  }

  
`;

const Colors = {
  light: "#f7f6ef",
  green: "#398897",
  dark: "#353743",
};

export const Container = styled.div`
  position: relative; 
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${Colors.light};
`;



export default Colors;
