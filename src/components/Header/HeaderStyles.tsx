import styled from "styled-components";
import Colors from "./../../AppStyles";
import { NavLink } from "react-router-dom";


export const HeaderWrapper = styled.header`
  border: solid;
  border-width: 0 0 2px 0;
  border-color: ${Colors.dark};
  padding: 10px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.light};
  position: fixed; 
  top: 0; 
  width: 100%; 
  z-index: 1000; 
  height:80px;
`;

export const Logo = styled.img`
  height: 60px;
`;
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Navigation = styled.nav`
  margin-left: auto;
`;

export const HeaderNavLink = styled(NavLink)`
  margin-left: 20px;
  font-weight: 500;
  font-size: 20px;
  color: ${Colors.dark};
  &:hover {
    color: ${Colors.green};
  }
`;

export const RegisterButton = styled.button`
  color: ${Colors.dark};
  font-weight: 600;
  text-decoration: underline;
  font-family: "Manrope", sans-serif;
  background-color: transparent;
  border: none;
  font-size: 20px;
  margin-left: 20px;
  &:hover {
    color: ${Colors.green};
  }
`;

export const LoginButton = styled(RegisterButton)`
  margin-left: 20px;
  font-weight: 600;
  background-color: transparent;
  text-decoration: none;
  
`;

export const LogoutButton = styled(LoginButton)`
  text-decoration: underline;
`;