'use client';

import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../styles';
import { LogoLight } from '../icons';
import Button from './Button';

const StyledFooter = styled.footer`
  width: 100%;
  height: 7.5rem;
  background-color: ${theme.dark};
  display: flex;
  justify-content: center;
  align-items: center;

  & .container {
    width: 100%;
    max-width: 1110px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .button {
      background: ${theme.gradient2};
      transition: all 0.4s ease;

      &:hover {
        background: ${theme.gradient2hover};
      }
    }
  }

  @media (max-width: 768px) {
    width: 19.5rem;
  }

  & .title {
    color: ${theme.darkNavy};
    padding-bottom: 1.75rem;

    @media (max-width: 768px) {
      padding-bottom: 1.5rem;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter className="footer">
      <div className="container">
        <LogoLight />

        <Button className="button">Get Started</Button>
      </div>
    </StyledFooter>
  );
}

export default Footer;
