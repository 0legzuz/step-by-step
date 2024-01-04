import React from "react";
import * as S from "./FooterStyles";
import { Link } from "react-router-dom";

const FooterComponent: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.FooterLinks>
          <S.FooterLink>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H8v-6h3.17l1.41 1.41L13 10.17V8h2v2.17l2.59 2.58L17 10.99 13.17 9z" />
              </svg>
            </Link>
          </S.FooterLink>
          <S.FooterLink>
            <Link to="/about">
              {/* Replace with your about SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H8v-6h3.17l1.41 1.41L13 10.17V8h2v2.17l2.59 2.58L17 10.99 13.17 9z" />
              </svg>
            </Link>
          </S.FooterLink>
          <S.FooterLink>
            <Link to="/contact">
              {/* Replace with your contact SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H8v-6h3.17l1.41 1.41L13 10.17V8h2v2.17l2.59 2.58L17 10.99 13.17 9z" />
              </svg>
            </Link>
          </S.FooterLink>
        </S.FooterLinks>

        <S.FooterSocialMedia>
          {/* Add your social media SVG icons or links here */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer">
            {/* Replace with your Twitter SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H8v-6h3.17l1.41 1.41L13 10.17V8h2v2.17l2.59 2.58L17 10.99 13.17 9z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer">
            {/* Replace with your Facebook SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H8v-6h3.17l1.41 1.41L13 10.17V8h2v2.17l2.59 2.58L17 10.99 13.17 9z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer">
            {/* Replace with your Instagram SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H8v-6h3.17l1.41 1.41L13 10.17V8h2v2.17l2.59 2.58L17 10.99 13.17 9z" />
            </svg>
          </a>
        </S.FooterSocialMedia>
      </S.FooterContent>

      <S.FooterDisclaimer>
        © 2024 Step-by-step. All rights reserved.
      </S.FooterDisclaimer>
    </S.FooterContainer>
  );
};

export default FooterComponent;
