'use client';

import React from 'react';
import { styled } from 'styled-components';
import { Container } from '../styles';

const StyledStatCardContainer = styled.div`
  min-width: 4.5rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

function StatCardContainer() {
  return (
    <Container>
      <StyledStatCardContainer>
        <div>
          <div>
            <p>Repos</p>
            <p>8</p>
          </div>
          <div>
            <p>Followers</p>
            <p>3938</p>
          </div>
          <div>
            <p>Following</p>
            <p>9</p>
          </div>
        </div>
      </StyledStatCardContainer>
    </Container>
  );
}

export default StatCardContainer;
