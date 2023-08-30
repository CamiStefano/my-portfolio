'use client';

import React from 'react';
import { styled } from 'styled-components';
import Cards from './Cards';
import { theme } from '../styles';

const StyledCardsSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  & .box-1 {
    width: 21.875rem;
    height: 20.125rem;
    border-radius: 0.9375rem;
    background: ${theme.gradient1};
    padding: 4rem 2rem 8rem;

    & p {
      color: ${theme.light};
      font-size: 2rem;
      font-style: normal;
      font-weight: 800;
      line-height: 2.5rem;
    }
  }
`;

function CardsSection() {
  return (
    <StyledCardsSection className="container">
      <div className="box-1">
        <p>Check out our most popular courses!</p>
      </div>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </StyledCardsSection>
  );
}

export default CardsSection;
