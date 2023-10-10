'use client';

import React from 'react';
import { styled } from 'styled-components';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import { Container } from '../styles';

const StyledNavBar = styled.nav`
  font-family: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.3125rem;
  background: transparent;
  color: ${({ theme }) => theme.tertiaryLight};
  z-index: 10;

  & h1 {
    color: ${({ theme }) => theme.dark};
  }

  & button {
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.tertiaryLight};
    font-size: 0.8125rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.4s ease;
    font-family: inherit;
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

function NavBar({ theme, setTheme }) {
  return (
    <Container>
      <StyledNavBar>
        <h1>devfinder</h1>
        <button type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          <span>{theme === 'light' ? 'DARK' : 'LIGHT'}</span>
          {theme === 'light' ? <HiMoon size={20} /> : <CgSun size={20} />}
        </button>
      </StyledNavBar>
    </Container>
  );
}

export default NavBar;
