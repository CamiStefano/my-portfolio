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
  padding: 0rem 2.5rem;

  & .container {
    width: 100%;
    max-width: 1110px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 1279px) {
      max-width: 768px;
    }

    @media only screen and (max-width: 764px) {
      width: 343px;
    }

    & button {
      background: ${theme.gradient2};

      &:hover {
        background: ${theme.gradient2hover};
      }
    }
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

        <Button>Get Started</Button>
      </div>
    </StyledFooter>
  );
}

export default Footer;
