import React from "react";
import styled from "styled-components";
import ActionButton from "../ActionButton/ActionButton";
import Colors from "../../AppStyles";

// Интерфейс для описания пропсов
interface HalfSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonVariant: string;
  backgroundColor: string;
  tags: { label: string; color: string }[];
  side: "left" | "right"; // Добавили проп side
}

const HalfSection: React.FC<HalfSectionProps> = ({
  title,
  description,
  buttonText,
  buttonVariant,
  backgroundColor,
  tags,
  side,
}) => {
  return (
    <SectionContainer backgroundColor={backgroundColor} side={side}>
      <ContentContainer>
        <TextContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <ActionButton textButton={buttonText} variant={buttonVariant} />
        </TextContainer>
        <TagsContainer>
          {tags.map((tag, index) => (
            <Tag key={index} color={tag.color}>
              {tag.label}
            </Tag>
          ))}
        </TagsContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default HalfSection;

// Стили
const SectionContainer = styled.div<{
  backgroundColor: string;
  side: "left" | "right";
}>`
  display: flex;
  justify-content: ${(props) =>
    props.side === "left" ? "flex-start" : "flex-end"};
  background-color: ${(props) => props.backgroundColor};
  border-top: 4px solid ${Colors.black};
  border-bottom: 4px solid ${Colors.black};
  width: 50%; // Занимает половину ширины экрана
  height: 800px; // Перенесли высоту сюда
`;

const ContentContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; // Занимает доступное пространство
  padding-left: 100px;
  max-width: 500px;
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
  padding-bottom: 50px;
`;

const Description = styled.p`
  font-size: 25px;
  line-height: 32px;
  font-weight: 300;
  font-family: "Raleway", sans-serif;
  padding-bottom: 60px;
`;

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
`;

const Tag = styled.div<{ color: string }>`
  text-align: center;
  font-size: 150px;
  width: 150px;
  line-height: 150px;
  font-weight: 900;
  color: ${(props) => props.color};
  font-family: "Raleway", sans-serif;
  text-shadow: 7px 7px 0px rgba(0, 0, 0, 1);
  -webkit-text-stroke: 2px black;
  writing-mode: vertical-rl; 
`;
