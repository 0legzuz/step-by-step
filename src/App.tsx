import {Container, GlobalStyle } from "./AppStyles";
import GridComponent from "./components/GridCards/GridCards.tsx/GridCards";
import HeaderComponent from "./components/Header/Header";
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <HeaderComponent></HeaderComponent>
        <GridComponent></GridComponent>
      </Container>
    </>
  );
}

export default App;
