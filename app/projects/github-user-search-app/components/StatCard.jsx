'use client';

import React from 'react';
import { styled } from 'styled-components';
import { Container } from '../styles';

const StyledStatCardContainer = styled.div`
  max-width: 30rem;
  background: ${({ theme }) => theme.pageBackground};
  border-radius: 0.625rem;
  display: flex;
  margin-left: 9.62rem;
  margin-top: 2rem;
  justify-content: space-between;
  padding: 1rem 5rem 1rem 2rem;

  div > h4 {
    color: ${({ theme }) => theme.lightBlue};
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
  }
  div > p {
    color: ${({ theme }) => theme.primaryDark};
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
  }

  @media only screen and (min-width: 328px) and (max-width: 729px) {
    max-width: 573px;
    margin-left: 0rem;
    margin-top: 0rem;
  }

  @media (max-width: 572px) {
    max-width: 327px;

    padding: 1.1rem 1.4rem;

    & div {
      display: flex;
      flex-direction: column;
      align-items: center;

      & h4 {
        font-size: 0.6875rem;
      }

      & p {
        font-size: 1rem;
        padding-top: 0.5rem;
      }
    }
  }
`;

function StatCardContainer() {
  return (
    <Container>
      <StyledStatCardContainer>
        <div>
          <h4>Repos</h4>
          <p>8</p>
        </div>
        <div>
          <h4>Followers</h4>
          <p>3938</p>
        </div>
        <div>
          <h4>Following</h4>
          <p>9</p>
        </div>
      </StyledStatCardContainer>
    </Container>
  );
}

export default StatCardContainer;
