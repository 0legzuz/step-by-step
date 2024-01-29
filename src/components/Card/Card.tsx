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
  price:string
}) => {
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
    <S.CardWrapper>
      <S.ImageBox>
        <S.Image src={imageUrl} alt="Card Image" />
      </S.ImageBox>
      <S.Content>
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
  );
};

export default CardComponent;
