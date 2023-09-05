'use client';

import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../styles';
import { LogoDark } from '../icons';
import Button from './Button';

const StyledNavBar = styled.nav`
  width: 100%;
  height: 7rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  & .container {
    max-width: 1110px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1280px) {
      max-width: 768px;
    }

    & .button {
      background: ${theme.dark};
      transition: all 0.4s ease;

      &:hover {
        background: ${theme.lightBlue};
      }
    }

    @media (max-width: 768px) {
      max-width: 768px;
    }
  }
`;

function NavBar() {
  return (
    <StyledNavBar className="navbar">
      <div className="container">
        <LogoDark />

        <Button className="button">Get Started</Button>
      </div>
    </StyledNavBar>
  );
}

export default NavBar;
