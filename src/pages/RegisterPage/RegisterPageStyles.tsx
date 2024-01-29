import styled from "styled-components";
import { LoginWrapper } from "../LoginPage/LoginPageStyles";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const RegisterWrapper = styled(LoginWrapper)`
  height: 560px;
`;
