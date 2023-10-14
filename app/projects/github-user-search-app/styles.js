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
  transition: all 0.2s ease;

  & .disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor: default;
  }

  @media only screen and (min-width: 376px) and (max-width: 768px) {
    max-width: 768px;
  }

  @media (max-width: 376px) {
    max-width: 376px;
  }
`;

export const Container = styled.div`
  max-width: 730px;

  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 328px) and (max-width: 729px) {
    max-width: 573px;
  }

  @media (max-width: 327px) {
    max-width: 327px;
  }
`;
