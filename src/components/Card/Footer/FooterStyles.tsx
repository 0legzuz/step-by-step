// FooterStyles.ts
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

export const FooterLink = styled.div`
  font-size: 16px;

  a {
    color: #fff;
    text-decoration: none;

    svg {
      width: 24px;
      height: 24px;
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
  margin-top: 20px;
  font-size: 14px;
`;
