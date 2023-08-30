'use client';

import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../styles';

const StyledCard = styled.div`
  width: 21.875rem;
  height: 20.125rem;
  padding: 4rem;
  border-radius: 0.9375rem;
  background: ${theme.light};
  padding: 4rem 2rem 8rem;

  & p {
    max-width: 17.875rem;
    color: ${theme.dark};
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 2.5rem;
  }
`;

function Cards() {
  return (
    <StyledCard className="boxes">
      <p>asjaksjaksjajsajks</p>
      <p>asjaksjaksjajsajks</p>
    </StyledCard>
  );
}

export default Cards;
