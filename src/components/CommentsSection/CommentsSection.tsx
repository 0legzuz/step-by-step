import React from "react";
import styled from "styled-components";
import Colors from "../../AppStyles";

interface CommentsProps {
  title: string;
  text: string;
  backgroundColor?: string;
}

interface CommentsSectionProps {
  comments: CommentsProps[];
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ comments }) => {
  return (
    <Container>
      <ContentContainer>
        <Title>О нас говорят и пишут</Title>
        <CardsContainer>
          {comments.map((comment, index) => (
            <CommentCard
              key={index}
              backgroundColor={comment.backgroundColor || Colors.white}
            >
              <ContentWrapper index={index}>
                <CommentTitle>{comment.title}</CommentTitle>
                <CommentText>{comment.text}</CommentText>
              </ContentWrapper>
            </CommentCard>
          ))}
        </CardsContainer>
      </ContentContainer>
    </Container>
  );
};

export default CommentsSection;

// Стили
const Container = styled.div`
  background-color: ${Colors.mint};
  width: 100%;
  padding: 150px 0; // Устанавливаем только вертикальные отступы
`;

const ContentContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px; // Минимальные горизонтальные отступы
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

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
margin-bottom: -60px;
  font-size: 50px;
  text-align: left;
  font-weight: 500;
  font-family: "Raleway";
  max-width: 600px;
  padding-left: 20px;
  max-width: 370px;
`;

const CommentCard = styled.div<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || "#ffffff"};
  border: 2px solid ${Colors.black};
  border-radius: 16px;
  cursor: pointer;
  -webkit-box-shadow: 7px 7px 0px 0 rgba(0, 0, 0, 1);
  -moz-box-shadow: 7px 7px 0px 0 rgba(0, 0, 0, 1);
  box-shadow: 7px 7px 0px 0 rgba(0, 0, 0, 1);
  width: 460px;
  height: 460px;
  padding: 50px 50px 70px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:nth-child(1) {
    margin-top: 150px; /* Первый элемент с отступом 150px */
  }

  &:nth-child(2) {
    margin-top: 75px; /* Второй элемент с отступом 75px */
    transform: rotate(10deg);
  }

  &:nth-child(3) {
    margin-top: 0px; /* Третий элемент без отступа */
  }
`;

const ContentWrapper = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ index }) =>
    index === 1 &&
    `
    transform: rotate(-10deg);
  `}
`;

const CommentTitle = styled.h3`
  font-size: 32px;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
  text-align: center;
  width: 100%;
`;

const CommentText = styled.p`
  width: 100%;
  margin-top: 30px;
  text-align: left;
  font-size: 25px;
  line-height: 32px;
  font-weight: 300;
  font-family: "Raleway";
`;
