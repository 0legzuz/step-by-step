import React from "react";
import styled from "styled-components";
import Colors from "../../AppStyles";
import logo from "../../../public/images/logo.svg";

// Типизация для компонента Footer
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <FooterContent>
          <Column>
            <Brand>
              <LogoContainer>
                <Logo src={logo} alt="Логотип" />
              </LogoContainer>
              <Phone>8 (812) 000 00 00</Phone>
              <SocialIcons></SocialIcons>
            </Brand>
          </Column>
          <Column>
            <h3>О школе</h3>
            <ul>
              <li>Преподаватели</li>
              <li>Сертификаты</li>
              <li>Цены</li>
              <li>Разговорные клубы</li>
            </ul>
          </Column>
          <Column>
            <h3>Программы</h3>
            <ul>
              <li>Для школьников</li>
              <li>Для взрослых</li>
              <li>Онлайн-курс</li>
              <li>Экспресс-тест</li>
            </ul>
          </Column>
          <Column>
            <h3>Инфо</h3>
            <ul>
              <li>Контакты</li>
              <li>Консультация</li>
              <li>Политика конфиденциальности</li>
              <li>Работа у нас</li>
            </ul>
          </Column>
        </FooterContent>
        <FooterBottom>
          <p>© Lineika, 2024</p>
        </FooterBottom>
      </ContentContainer>
    </FooterContainer>
  );
};

export default Footer;

// Стили
const FooterContainer = styled.footer`
  border-top: 4px solid ${Colors.black};
  background-color: ${Colors.yellow};
  display: flex;
  flex-direction: column;
  height: 480px;
  width: 100%;
`;

const ContentContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px; // Минимальные отступы для маленьких экранов
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0 50px;
  }

  @media (min-width: 1024px) {
    padding: 0 100px;
  }

  @media (min-width: 1440px) {
    padding: 0 150px;
  }

  @media (min-width: 1920px) {
    padding: 0 200px;
  }
`;

const FooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 20px;
`;

const Column = styled.div`
  padding-top: 95px;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 25px;
    font-weight: 600;
    font-family: "Raleway", sans-serif;
    width: 100%;
    margin-bottom: 40px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      margin-bottom: 14px;
      font-size: 20px;
      line-height: 32px;
      font-weight: 300;
      font-family: "Raleway";
    }
  }
`;

const Brand = styled.div`
  h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
    line-height: 1.2;
  }
`;

const Phone = styled.p`
  margin-top: 30px;
  padding-left: 25px;
  font-size: 20px;
  line-height: 32px;
  font-weight: 300;
  font-family: "MontLight";
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const Icon = styled.span`
  font-size: 24px;
  cursor: pointer;
`;

const FooterBottom = styled.div`
  width: 100%;
  text-align: left;
  padding-top: 10px;
  p {
    font-size: 20px;
    line-height: 32px;
    font-weight: 300;
    font-family: "Raleway";
  }
`;

const LogoContainer = styled.div`
  width: 185px;
  padding: 0 20px;
  border-top: 1px solid ${Colors.black};
  border-bottom: 1px solid ${Colors.black};
`;

const Logo = styled.img`
  height: auto;
  cursor: pointer;
`;
