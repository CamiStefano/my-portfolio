'use client';

import { styled } from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.tertiaryDark};
  background: ${({ theme }) => theme.pageBackground};
`;

export const Container = styled.div`
  max-width: 730px;
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 326px) and (max-width: 729px) {
    max-width: 768px;
  }

  @media (max-width: 767px) {
    max-width: 327px;
  }
`;
