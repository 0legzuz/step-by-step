import { Container } from "../AppStyles";
import FooterComponent from "../components/Footer/Footer";
import GridComponent from "../components/GridCards/GridCards.tsx/GridCards";
import HeaderComponent from "../components/Header/Header";

const MainPage: React.FC = () => {
  return (
    <>
      <Container>
        <HeaderComponent></HeaderComponent>
        <GridComponent></GridComponent>
        <FooterComponent></FooterComponent>
      </Container>
    </>
  );
}

export default MainPage;
