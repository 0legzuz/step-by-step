
import styled from "styled-components";
import Colors from "../../AppStyles";

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const BlocksContainer = styled.div`
  width: 1000px;
  border: 2px solid;
  height: 2000px;
  border-color: ${Colors.dark};
`;