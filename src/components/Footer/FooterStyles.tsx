import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
  width: 100%;
  position: absolute;
  bottom: 0;

`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
`;

export const FooterLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

export const FooterLink = styled.div`
  a {
    color: #fff;
    text-decoration: none;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const FooterSocialMedia = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 20px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const FooterDisclaimer = styled.div`
  margin-top: 10px;
  font-size: 14px;
  display: flex;
  justify-content: center;
`;
