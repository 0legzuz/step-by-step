import { Link } from "react-router-dom";
import { useRef } from "react";
import * as S from "./CardStyles";

const CardComponent = ({
  imageUrl,
  text,
  rating,
  description,
  price,
}: {
  imageUrl: string;
  text: string;
  rating: number;
  description: string;
  price: string;
}) => {
  const cardWrapperRef = useRef(null);

  const renderCircles = () => {
    const circles = [];
    for (let i = 1; i <= 5; i++) {
      circles.push(
        rating >= i ? (
          <S.FullCircleIcon key={i}>●</S.FullCircleIcon>
        ) : (
          <S.EmptyCircleIcon key={i}>●</S.EmptyCircleIcon>
        )
      );
    }
    return circles;
  };

  return (
    <Link to="/card/1">
      <S.CardWrapper ref={cardWrapperRef}>
        <S.ImageBox>
          <S.Image src={imageUrl} alt="Card Image" />
        </S.ImageBox>
        <S.Content
          isExpanded={
            cardWrapperRef.current && cardWrapperRef.current.offsetHeight > 300
          }>
          <S.FirstRow>
            <S.CardName>{text}</S.CardName>
            <S.CardPrice>{price}</S.CardPrice>
          </S.FirstRow>
          <S.InfoRow>
            <S.Avatar></S.Avatar>
            <S.RatingWrapper>{renderCircles()}</S.RatingWrapper>
          </S.InfoRow>
          <S.Nickname>Primer_nick_Primer_nick_Primer</S.Nickname>
          <S.Description>{description}</S.Description>
        </S.Content>
      </S.CardWrapper>
    </Link>
  );
};

export default CardComponent;
