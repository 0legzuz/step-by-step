import styled from "styled-components";
import Colors from "./../../AppStyles";

export const InfoRow = styled.div`
  display: flex;
  gap: 10px;

  align-items: center;
`;
export const RatingWrapper = styled.div`
  display: flex;
  padding-bottom: 3px;
`;
export const Avatar = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${Colors.green};
`;

export const ImageBox = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: 0;
  height: calc(100% - 80px);
  width: 100%;
`;

export const Nickname = styled.div`
  margin-bottom: 10px;
  font-size: 10px;
  color: ${Colors.dark};
  font-weight: 600;
  text-decoration: underline;
`;

export const Content = styled.div`
  padding: 10px;
  border-style: solid;
  border-width: 0px 2px 2px 2px;
  border-color: ${Colors.dark};
  background-color: ${Colors.light};
  height: 95px;
  position: absolute;
  z-index: 1;
  bottom: 0;
  width: 100%;
  transition: height ${(props) => (props.isExpanded ? "1.75s" : "1s")} ease;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const CardName = styled.p`
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 10px;
  color: ${Colors.dark};
`;

export const CardPrice = styled.p`
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 10px;
  color: ${Colors.green};
`;

export const FullCircleIcon = styled.span`
  color: ${Colors.green};
  margin-right: 4px;
  font-size: 16px;
`;

export const EmptyCircleIcon = styled(FullCircleIcon)`
  color: #ddd;
`;

export const CardWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${Colors.light};
  margin: 16px;
  height: 100%;
  cursor: pointer;
  position: relative;

  &:hover {
    ${Content} {
      height: 100%;
      z-index: 1;
    }
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${Colors.dark};
  margin-bottom: 8px;
`;
