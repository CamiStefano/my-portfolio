'use client';

import React from 'react';
import { styled } from 'styled-components';
import { CgSearch } from 'react-icons/cg';
import { Container, theme } from '../styles';
import Button from './Button';

const StyledSearchContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7rem;
  background-color: transparent;
  border-radius: 0.9375rem;
  background: #fefefe;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  z-index: 10;
  padding: 1rem 0.5rem;

  & h1 {
    color: ${theme.dark};
  }
  & .colorImg {
    color: #0079ff;
  }

  @media (max-width: 768px) {
    max-width: 768px;
  }
`;

function SearchContainer() {
  return (
    <Container>
      <StyledSearchContainer>
        <div>
          <CgSearch size={24} className="colorImg" />
        </div>
        <Button>Search</Button>
      </StyledSearchContainer>
    </Container>
  );
}

export default SearchContainer;
