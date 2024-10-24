import React from "react";
import styled from "styled-components";
import logo from "../../../public/images/logo.svg";
import Colors from "../../AppStyles"; // Подключаем ваши глобальные стили

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ButtonsContainer>
        <LogoContainer>
          <Logo src={logo} alt="Логотип" />
        </LogoContainer>
        <Button>О школе</Button>
        <Button>Программы</Button>
        <Button>Экспресс-тест</Button>
        <PhoneButton>+7 (999) 999-99-99</PhoneButton>
        <BurgerButton>
          <span />
          <span />
          <span />
          <span />
        </BurgerButton>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1530px;
  padding: 8px 0;

  @media (min-width: 769px) {
    font-size: 14px;
  }

  @media (min-width: 1025px) {
    font-size: 16px;
    padding: 10px 10px;
    gap: 15px;
  }

  @media (min-width: 1441px) {
    font-size: 18px;
    padding: 20px 15px;
  }
`;

const Button = styled.button`
  position: relative;
  background: none;
  border: none;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 14px; /* Базовый стиль для мобильных устройств */
  padding: 15px 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: none;

  @media (min-width: 769px) {
    font-size: 16px;
    padding: 20px 10px;
    display: flex;
  }

  @media (min-width: 1025px) {
    font-size: 18px;
    padding: 25px 15px;
  }

  @media (min-width: 1441px) {
    font-size: 20px;
    padding: 30px;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 1px;
    width: 0;
    background-color: ${Colors.black};
    transition: width 0.3s ease;
  }

  &:before {
    top: 0;
    left: 0;
  }

  &:after {
    bottom: 0;
    left: 0;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
  }

  &:hover {
    font-weight: 600;
  }
`;

const PhoneButton = styled(Button)`
  @media (max-width: 1135px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  width: 125px; /* Базовое значение */
  padding: 0 20px;
  border-top: 1px solid ${Colors.black};
  border-bottom: 1px solid ${Colors.black};

  @media (min-width: 769px) {
    width: 145px;
  }

  @media (min-width: 1025px) {
    width: 167px; /* Базовое значение */
  }

  @media (min-width: 1441px) {
    width: 185px;
  }
`;

const Logo = styled.img`
  height: auto;
  cursor: pointer;
`;

const BurgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 38px;
  height: 30px;
  box-sizing: content-box; /* Добавлено, чтобы учитывать padding */
  @media (min-width: 769px) {
    display: none;
  }
  span {
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${Colors.black};
  }
`;

