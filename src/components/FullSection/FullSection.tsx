import React from 'react';
import styled from 'styled-components';
import ActionButton from '../ActionButton/ActionButton'; // Предполагается, что ActionButton уже создан
import Colors from '../../AppStyles';

const FullSection: React.FC = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <TextContainer>
          <Title>Сложно определиться с программой?</Title>
          <Description>
            Запишись на бесплатную консультацию. Подберем программу и расскажем
            о школе подробнее.
          </Description>
          <ActionButton textButton="Хочу консультацию" variant="yellow" />
        </TextContainer>
        <TagsContainer>
          <Tag
            style={{
              backgroundColor: `${Colors.orange}`,
              top: "165px",
              left: "150px",
              borderRadius: "50%",
              padding: "35px 65px",
              transform: "rotate(-15deg)",
              fontSize: "25px",
              fontWeight: "500",
            }}
          >
            Подготовка к ОГЭ
          </Tag>
          <Tag
            style={{
              backgroundColor: `${Colors.yellow}`,
              top: "370px",
              left: "150px",
              borderRadius: "0",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Математический анализ
          </Tag>
          <Tag
            style={{
              backgroundColor: `${Colors.white}`,
              top: "170px",
              left: "120px",
            }}
          >
            Основы алгебры
          </Tag>

          <Tag
            style={{
              backgroundColor: `${Colors.white}`,
              top: "140px",
              left: "500px",
            }}
          >
            Геометрия
          </Tag>
          <Tag
            style={{
              backgroundColor: `${Colors.white}`,
              top: "330px",
              left: "70px",
            }}
          >
            Математика
          </Tag>

          <Tag
            style={{
              backgroundColor: `${Colors.white}`,
              top: "530px",
              left: "90px",
            }}
          >
            Олимпиады
          </Tag>

          <Tag
            style={{
              backgroundColor: `${Colors.yellow}`,
              top: "340px",
              left: "400px",
              transform: "rotate(90deg)",
              fontSize: "20px",
              fontWeight: "500",
              padding: "25px 40px",
              borderRadius: "15px",
            }}
          >
            Тригонометрия
          </Tag>
          <Tag
            style={{
              backgroundColor: `${Colors.white}`,
              top: "460px",
              left: "530px",
            }}
          >
            Алгебра
          </Tag>
          <Tag
            style={{
              backgroundColor: `${Colors.white}`,
              top: "240px",
              left: "500px",
            }}
          >
            Подтянуть оценки
          </Tag>
          <Tag
            style={{
              backgroundColor: `${Colors.orange}`,
              top: "520px",
              left: "250px",
              borderRadius: "100px",
              fontSize: "20px",
              fontWeight: "500",
              padding: "25px 40px",
            }}
          >
            Высшая математика
          </Tag>
          <Tag
            style={{
              backgroundColor: `${Colors.white}`,
              top: "580px",
              left: "460px",
            }}
          >
            Подготовка к ЕГЭ
          </Tag>
        </TagsContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default FullSection;

// Стили
const SectionContainer = styled.div`
  background-color: ${Colors.mint};
  border-top: 4px solid ${Colors.black};
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1920px;
  position: relative;
  flex-wrap: wrap-reverse;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  padding-left: 20px;
`;

const Title = styled.h2`
  font-size: 50px;
  margin-top: 180px;
  font-weight: 500;
  font-family: 'Raleway', sans-serif;
  padding-bottom: 50px;
`;

const Description = styled.p`
  font-size: 25px;
  line-height: 32px;
  font-weight: 300;
  font-family: 'Raleway', sans-serif;
  padding-bottom: 60px;
`;

const TagsContainer = styled.div`
  position: relative;
  height: 550px;
  max-width: 700px;
  width: 100%;
  transform: scale(0.5);
  @media (min-width: 425px) {
  }

  @media (min-width: 769px) {
    transform: scale(0.8);
  }

  @media (min-width: 1025px) {
    transform: scale(1);
  }

  @media (min-width: 1441px) {
  }
`;

const Tag = styled.div`
  position: absolute;
  font-size: 16px;
  font-weight: 300;
  font-family: 'Raleway', sans-serif;
  padding: 10px 25px;
  border-radius: 8px;
  border: 2px solid ${Colors.black};
  -webkit-box-shadow: 3px 3px 0px 0 rgba(0, 0, 0, 1);
  -moz-box-shadow: 3px 3px 0px 0 rgba(0, 0, 0, 1);
  box-shadow: 3px 3px 0px 0 rgba(0, 0, 0, 1);
`;

