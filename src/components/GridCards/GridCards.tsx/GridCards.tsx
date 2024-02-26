import { useEffect, useState } from "react";
import CardComponent from "../../Card/Card";
import * as S from "./GridCardsStyles";
import { getCards } from "../../../api";

const GridComponent: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    
  ]);

  useEffect(() => {
    // Запросите начальные карты при монтировании компонента
    const fetchCards = async () => {
      try {
        const data = await getCards();
        setCards(data);
      } catch (error) {
        console.error("Ошибка при получении карточек:", error);
      }
    };

    fetchCards();
  }, []);

  interface Card {
    id: string;
    preview_image: string;
    description: string;
    title: string;
    content: { type: string; data: string }[];
    owner_id: string;
    images_id: string[];
    reactions_info: number;
    date: string;
  }

  // // Пример карточек
  // const cards: Card[] = [
    // {
    //   id: "вававаываыа",
    //   preview_image: "image1.jpg",
    //   description: "Description 1",
    //   title: "T1212",
    //   content: [{ type: "text", data: "Content 1" }],
    //   owner_id: "user1",
    //   images_id: ["image1"],
    //   reactions_info: 0,
    //   date: "2024-02-08",
    // },
  //   {
  //     id: "ываыавыаыа",
  //     preview_image: "image2.jpg",
  //     description: "Description 2",
  //     title: "T21222222",
  //     content: [{ type: "text", data: "Content 2" }],
  //     owner_id: "user2",
  //     images_id: ["image2"],
  //     reactions_info: 0,
  //     date: "2024-02-08",
  //   },
  //   {
  //     id: "11",
  //     preview_image: "image2.jpg",
  //     description: "Description 2",
  //     title: "Title 2",
  //     content: [{ type: "text", data: "Content 2" }],
  //     owner_id: "user2",
  //     images_id: ["image2"],
  //     reactions_info: 0,
  //     date: "2024-02-08",
  //   },
  //   {
  //     id: "11",
  //     preview_image: "image2.jpg",
  //     description: "Description 2",
  //     title: "Title 2",
  //     content: [{ type: "text", data: "Content 2" }],
  //     owner_id: "user2",
  //     images_id: ["image2"],
  //     reactions_info: 0,
  //     date: "2024-02-08",
  //   },
    // {
    //   id: "5",
    //   preview_image: "image2.jpg",
    //   description: "Description 2",
    //   title: "Title 2",
    //   content: [{ type: "text", data: "Content 2" }],
    //   owner_id: "user2",
    //   images_id: ["image2"],
    //   reactions_info: 0,
    //   date: "2024-02-08",
    // },
    // {
    //   id: "6",
    //   preview_image: "image2.jpg",
    //   description: "Description 2",
    //   title: "Title 2",
    //   content: [{ type: "text", data: "Content 2" }],
    //   owner_id: "user2",
    //   images_id: ["image2"],
    //   reactions_info: 0,
    //   date: "2024-02-08",
    // },
    // {
    //   id: "7",
    //   preview_image: "image2.jpg",
    //   description: "Description 2",
    //   title: "Title 2",
    //   content: [{ type: "text", data: "Content 2" }],
    //   owner_id: "user2",
    //   images_id: ["image2"],
    //   reactions_info: 0,
    //   date: "2024-02-08",
    // },
    // // {
    //   id: "8",
    //   preview_image: "image2.jpg",
    //   description: "Description 2",
    //   title: "Title 2",
    //   content: [{ type: "text", data: "Content 2" }],
    //   owner_id: "user2",
    //   images_id: ["image2"],
    //   reactions_info: 0,
    //   date: "2024-02-08",
    // },
    // {
    //   id: "9",
    //   preview_image: "image2.jpg",
    //   description: "Description 2",
    //   title: "Title 2",
    //   content: [{ type: "text", data: "Content 2" }],
    //   owner_id: "user2",
    //   images_id: ["image2"],
    //   reactions_info: 0,
    //   date: "2024-02-08",
    // },
    // {
    //   id: "10",
    //   preview_image: "image2.jpg",
    //   description: "Description 2",
    //   title: "Title 2",
    //   content: [{ type: "text", data: "Content 2" }],
    //   owner_id: "user2",
    //   images_id: ["image2"],
    //   reactions_info: 0,
    //   date: "2024-02-08",
    // },

    // Добавьте другие карточки по аналогии
  // ];

  interface Card {
    id: string;
    preview_image: string;
    description: string;
    title: string;
    content: { type: string; data: string }[];
    owner_id: string;
    images_id: string[];
    reactions_info: number;
    date: string;
  }

  interface LayoutItem {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    static: boolean;
  }

  const generateLayoutArray = (
    layoutConst: LayoutItem[],
    cardsLength: number
  ): LayoutItem[] => {
    const itemsPerRow = layoutConst.length;
    const layoutsPerRow = Math.ceil(cardsLength / itemsPerRow);

    const repeatedLayoutConst = Array.from(
      { length: layoutsPerRow },
      (_, rowIndex) =>
        layoutConst.map((item, colIndex) => ({
          ...item,
          i: `${rowIndex * itemsPerRow + colIndex + 1}`,
          y: item.y + rowIndex * 5,
        }))
    ).flat();

    return repeatedLayoutConst.slice(0, cardsLength);
  };

  // Пример использования
  const layoutTemplate: LayoutItem[] = [
    { i: "1", x: 0, y: 0, w: 1, h: 1, static: true },
    { i: "2", x: 2, y: 0, w: 2, h: 1, static: true },
    { i: "3", x: 0, y: 1, w: 1, h: 1, static: true },
    { i: "4", x: 1, y: 1, w: 2, h: 2, static: true },
    { i: "5", x: 0, y: 2, w: 1, h: 2, static: true },
    { i: "6", x: 1, y: 3, w: 1, h: 1, static: true },
    { i: "7", x: 2, y: 3, w: 1, h: 1, static: true },
    { i: "8", x: 0, y: 4, w: 1, h: 1, static: true },
    { i: "9", x: 1, y: 4, w: 1, h: 1, static: true },
    { i: "10", x: 2, y: 4, w: 1, h: 1, static: true },
  ];

  const generatedLayout = generateLayoutArray(layoutTemplate, cards.length);
console.log(cards);



  return (
    <S.CenteredContainer>
      <S.GridContainer
        className="layout"
        layout={generatedLayout}
        cols={3}
        rowHeight={300}
        width={1000}>
        {cards.map((card) => (
          <div key={`${cards.indexOf(card) + 1}`}>
            <CardComponent
              imageUrl={card.preview_image}
              text={card.title}
              rating={card.reactions_info}
              description={card.description}
              price="1"

            />
          </div>
        ))}
      </S.GridContainer>
      <S.LoadMoreButton>Загрузить еще</S.LoadMoreButton>
    </S.CenteredContainer>
  );
};
export default GridComponent;
