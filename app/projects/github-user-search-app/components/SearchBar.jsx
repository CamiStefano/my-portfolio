'use client';

import React from 'react';
import { styled } from 'styled-components';
import { CgSearch } from 'react-icons/cg';
import { Container } from '../styles';
import Button from './Button';

const StyledSearchContainer = styled.div`
  width: 100%;
  height: 4.3125rem;
  border-radius: 0.9375rem;
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
  z-index: 10;
  padding: 0.6rem;

  & .inputWrapper {
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1.4rem;

    & input {
      display: flex;
      font-family: inherit;
      border: none;
      outline: 0;
      padding-inline-start: 1.5rem;
      justify-content: start;
      flex: 1 1 auto;
      background-color: transparent;
      font-size: 1.125rem;
      line-height: 1.5625rem;
      color: ${({ theme }) => theme.inputSearch};
    }

    & button {
      flex: 0 0 auto;
    }
  }

  ::placeholder {
    color: ${({ theme }) => theme.lightBlue};
  }

  ::-ms-input-placeholder {
    color: ${({ theme }) => theme.lightBlue};
  }

  & h1 {
    color: ${({ theme }) => theme.dark};
  }
  & .colorImg {
    color: #0079ff;
    align-items: center;
  }

  @media (max-width: 768px) {
    max-width: 768px;
  }
`;

function SearchContainer() {
  return (
    <Container>
      <StyledSearchContainer>
        <div className="inputWrapper">
          <CgSearch size={24} className="colorImg" />
          <input type="search" id="userSearch" placeholder="Search GitHub username…" />
          <Button>Search</Button>
        </div>
      </StyledSearchContainer>
    </Container>
  );
}

export default SearchContainer;
