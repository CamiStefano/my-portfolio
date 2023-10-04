'use client';

import React from 'react';
import { styled } from 'styled-components';
// import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import { Container, theme } from '../styles';

const StyledNavBar = styled.nav`
  font-family: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.3125rem;
  background-color: transparent;
  color: #697c9a;
  z-index: 10;

  & h1 {
    color: ${theme.dark};
  }

  & div {
    display: flex;

    & span {
      font-size: 0.8125rem;
      letter-spacing: 0.15625rem;
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
        <h1>devfinder</h1>
        <div>
          <span>DARK </span>
          <HiMoon size={20} />
        </div>
      </StyledNavBar>
    </Container>
  );
}

export default NavBar;
