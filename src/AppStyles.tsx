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
  body {
  width: 100%;
  height: 100%;
  font-family: 'Manrope', sans-serif;
  overflow-y: scroll; /* Always show scrollbar */
}

/* Webkit browsers (Chrome, Safari) */
body::-webkit-scrollbar {
  width: 6px; /* Set the width of the scrollbar */
}

body::-webkit-scrollbar-thumb {
  background-color: #888; /* Set the color of the thumb */
  border-radius: 3px; /* Set the border-radius for rounded corners */
}

body::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Set the color of the track */
}

body::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Set the color of the thumb on hover */
}

  #root {
    height: 100%;
  }

  
`;

const Colors = {
  light: "#f7f6ef",
  green: "#398897",
  dark: "#353743",
  red: "#942F3F",
  gray: "#979D9D",
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
