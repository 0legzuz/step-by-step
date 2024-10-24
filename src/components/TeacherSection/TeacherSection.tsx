import React from "react";
import styled from "styled-components";
import Colors from "../../AppStyles";
import ArrowIcon from "../../../public/images/ArrowIcon";

// Интерфейс для преподавателя
interface Teacher {
  name: string;
  title: string;
  image: string; // URL изображения
  experience: string;
}

interface TeachersSectionProps {
  teachers: Teacher[];
}

const TeachersSection: React.FC<TeachersSectionProps> = ({ teachers }) => {
  return (
    <SectionContainer>
      <ContentContainer>
        <Title>С вами будут работать лучшие преподаватели</Title>
        <Carousel>
          <ArrowButton>
            <ArrowIcon color={Colors.mint} rotate={180}></ArrowIcon>
          </ArrowButton>
          <TeachersContainer>
            {teachers.map((teacher, index) => (
              <TeacherCard key={index}>
                <ImageWrapper isFirst={index === 0}>
                  <TeacherImage src={teacher.image} alt={teacher.name} />
                </ImageWrapper>
                <TeacherName>{teacher.name}</TeacherName>
                <TeacherExperience>{teacher.experience}</TeacherExperience>
              </TeacherCard>
            ))}
          </TeachersContainer>
          <ArrowButton>
            <ArrowIcon color={Colors.yellow}></ArrowIcon>
          </ArrowButton>
        </Carousel>
      </ContentContainer>
    </SectionContainer>
  );
};

export default TeachersSection;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.orange};
  border-bottom: 4px solid ${Colors.black};
  width: 100%;
  height: 1170px;
`;

const ContentContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
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

const Title = styled.h2`
  font-size: 50px;
  margin-top: 150px;
  text-align: left;
  font-weight: 500;
  font-family: "Raleway";
  max-width: 600px;
  padding-left: 20px;
`;

const Carousel = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0 20px;
  margin-top: 90px;
`;

const ArrowButton = styled.button`
  margin-top: 150px;
  -webkit-box-shadow: 3px 3px 0px 0 rgba(0, 0, 0, 1);
  -moz-box-shadow: 3px 3px 0px 0 rgba(0, 0, 0, 1);
  box-shadow: 3px 3px 0px 0 rgba(0, 0, 0, 1);
  border: 2px solid ${Colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  background-color: ${Colors.white};
`;

const TeachersContainer = styled.div`
  width: 100%;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
`;

const TeacherCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
`;

const ImageWrapper = styled.div<{ isFirst: boolean }>`
  overflow: hidden;
  -webkit-box-shadow: 3px 3px 0px 0 rgba(0, 0, 0, 1);
  -moz-box-shadow: 3px 3px 0px 0 rgba(0, 0, 0, 1);
  box-shadow: 3px 3px 0px 0 rgba(0, 0, 0, 1);
  border: 2px solid ${Colors.black};
  border-radius: 40% 0 40% 0;
  height: 350px;
  ${(props) =>
    props.isFirst &&
    `
    border-radius: 50%;
  `}
`;

const TeacherImage = styled.img`
  object-fit: cover;
  height: 100%;
`;

const TeacherName = styled.h3`
  margin-top: 55px;
  font-size: 32px;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
  text-align: center;
  width: 100%;
`;

const TeacherExperience = styled.p`
  width: 100%;
  margin-top: 30px;
  text-align: left;
  font-size: 25px;
  line-height: 32px;
  font-weight: 300;
  font-family: "Raleway";
`;
