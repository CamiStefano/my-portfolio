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
    width: 100%;
    max-width: 1110px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .button {
      background: ${theme.dark};
      transition: all 0.4s ease;

      &:hover {
        background: ${theme.lightBlue};
      }
    }
  }

  @media (max-width: 768px) {
    width: 19.5rem;
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
