import React, { useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { confirmRegistration } from "../../api";
import * as S from "./../LoginPage/LoginPageStyles";
import { Link } from "react-router-dom";

import { Container } from "./../../AppStyles";
import { Header } from "./IdPageStyles";

const IdPage: React.FC = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    if (userId) {
      confirmRegistration(userId).then((success) => {
        if (success) {
          // Сохраняем данные о регистрации в localStorage
          localStorage.setItem("registrationStatus", "success");
          navigate("/");
        }
      });
    }
    

   
  }, []);

  return (
    <Container>
      <S.CenteredContainer>
        <S.Road src="./../../images/road.svg" alt="Road" />
        <S.LoginWrapper>
          <Link to="/">
            <S.Logo src="./../../logo.svg" alt="Logo" />
          </Link>

          {localStorage.getItem("registrationStatus") === "success" && (
            <Header>
              Что-то пошло не так. Возможно вы уже зарегистрированы и перешли по
              ссылке повторно.
            </Header>
          )}

          {localStorage.getItem("registrationStatus") !== "success" && (
            <Header>Подтверждение регистрации... </Header>
          )}
        </S.LoginWrapper>
      </S.CenteredContainer>
    </Container>
  );
};

export default IdPage;
