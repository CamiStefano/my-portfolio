'use client';

import React from 'react';
import { styled } from 'styled-components';
import { CgSearch } from 'react-icons/cg';
import { Container, theme } from '../styles';

const StyledSeachBar = styled.nav`
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

function SearchBar() {
  return (
    <Container>
      <StyledSeachBar>
        <div>
          <CgSearch size={24} />
        </div>
        <form>
          <input type="submit" id="button" value="Search" placeholder="Search GitHub username…" />
        </form>
      </StyledSeachBar>
    </Container>
  );
}

export default SearchBar;
