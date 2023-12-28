import styled, { keyframes } from "styled-components";
import Colors from "./../../AppStyles";

const ShadowDrop = keyframes`
  0%{box-shadow:inset 0 0 0 0 transparent}100%{box-shadow:inset 0 -6px 14px -6px rgba(0,0,0,.5)}
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Content = styled.div`
  padding: 10px;
  border-style: solid;
  border-width: 0px 2px 2px 2px;
  border-color: ${Colors.dark};
  height: 80px;
`;

const ImageBox = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 10px;
`;

const FullCircleIcon = styled.span`
  color: ${Colors.green};
  margin-right: 4px;
  font-size: 16px; /* Регулируйте размер по вашему желанию */
`;

const EmptyCircleIcon = styled(FullCircleIcon)`
  color: #ddd; /* Цвет пустого кружка, можете настроить по своему вкусу */
`;

const CardWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${Colors.light};
  margin: 16px;
  height: 100%;
  &:hover {
    animation: ${ShadowDrop} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  &:hover ${Content} {
    transition: height 1s ease;
    height: 100%;
    border-width: 2px;
  }

  &:hover ${ImageBox} {
    transition: height 1s ease;
    height: 0%;
  }
`;
const Description = styled.p`
  font-size: 14px;
  color: ${Colors.dark};
  margin-bottom: 8px;
`;

const CardComponent = ({
  imageUrl,
  text,
  rating,
  description,
}: {
  imageUrl: string;
  text: string;
  rating: number;
  description: string;
}) => {
  const renderCircles = () => {
    const circles = [];
    for (let i = 1; i <= 5; i++) {
      circles.push(
        rating >= i ? (
          <FullCircleIcon key={i}>●</FullCircleIcon>
        ) : (
          <EmptyCircleIcon key={i}>●</EmptyCircleIcon>
        )
      );
    }
    return circles;
  };

  return (
    <CardWrapper>
      <ImageBox>
        <Image src={imageUrl} alt="Card Image" />
      </ImageBox>
      <Content>
        <Text>{text}</Text>
        <RatingWrapper>{renderCircles()}</RatingWrapper>
        <Description>{description}</Description>
      </Content>
    </CardWrapper>
  );
};

export default CardComponent;
