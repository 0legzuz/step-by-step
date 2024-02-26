import React from "react";
import { Container } from "../../AppStyles";
import HeaderComponent from "../../components/Header/Header";
import * as S from "./CardPageStyles";

const CardPage: React.FC = () => {
  return (
    <Container>
      <HeaderComponent />
      <S.CenteredContainer>
        <S.BlocksContainer></S.BlocksContainer>
      </S.CenteredContainer>
    </Container>
  );
};

export default CardPage;
