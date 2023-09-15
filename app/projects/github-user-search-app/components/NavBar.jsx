'use client';

import React from 'react';
import { styled } from 'styled-components';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import { Container, theme } from '../styles';

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7rem;
  background-color: transparent;
  z-index: 10;

  & h1 {
    color: ${theme.dark};
  }

  @media (max-width: 768px) {
    max-width: 768px;
  }
`;

function NavBar() {
  return (
    <Container>
      <StyledNavBar>
        <h1>devfinder</h1>
        <div>
          <span>DARK</span>
          <HiMoon size={20} />
        </div>
      </StyledNavBar>
    </Container>
  );
}

export default NavBar;
