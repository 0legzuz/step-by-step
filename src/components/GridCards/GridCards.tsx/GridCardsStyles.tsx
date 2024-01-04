import styled from "styled-components";
import GridLayout from "react-grid-layout";
import Colors from "../../../AppStyles";

export const GridContainer = styled(GridLayout)`
  width: 1000px;
  margin-top: 100px;
`;

export const CenteredContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoadMoreButton = styled.button`
  padding: 10px;
  margin: 20px;
  color: ${Colors.dark};
  font-weight: 600;
  text-decoration: underline;
  font-family: "Manrope", sans-serif;
  background-color: transparent;
  border: none;
  font-size: 20px;
`;
