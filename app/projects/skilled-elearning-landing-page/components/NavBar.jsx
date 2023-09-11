'use client';

import React from 'react';
import { styled } from 'styled-components';
import { Container, theme } from '../styles';
import { LogoDark } from '../icons';
import Button from './Button';

const StyledNavBar = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7rem;
  background-color: transparent;
  z-index: 10;

  & button {
    background: ${theme.dark};
    transition: all 0.4s ease;

    &:hover {
      background: ${theme.lightBlue};
    }
  }

  @media (max-width: 768px) {
    max-width: 768px;
  }
`;

function NavBar() {
  return (
    <Container>
      <StyledNavBar>
        <LogoDark />
        <Button>Get Started</Button>
      </StyledNavBar>
    </Container>
  );
}

export default NavBar;
