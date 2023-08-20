'use client';

import styled from 'styled-components';

export const theme = {
  white: '#FFFFFF',
  blue: '#1125D6',
  lightBlue: '#CAC9FF',
  veryLightBlue: '#ECF2FF',
  darkNavy: '#303B59',
  gradient1: 'linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%);',
};

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.veryLightBlue};
`;

export const Card = styled.section`
  display: flex;
  background-color: ${theme.white};
  box-shadow: 0px 30px 60px 0px rgba(61, 108, 236, 0.15);
  border-radius: 2rem;
  width: 46rem;
  height: 32rem;
  gap: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 23rem;
    height: 50.5rem;
    gap: 0;
    display: flex;
    align-items: center;
  }

  & .result {
    width: 23rem;
    height: 32rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${theme.gradient1};

    @media (max-width: 768px) {
      width: 23rem;
      height: 22rem;
    }
  }

  & .result__title {
    color: ${theme.lightBlue};
    padding-bottom: 2rem;

    @media (max-width: 768px) {
      padding-bottom: 1.5rem;
    }
  }

  & .result__circle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 100px;
    background: linear-gradient(
      180deg,
      #4d21c9 0%,
      rgba(37, 33, 201, 0) 100%,
      rgba(37, 33, 201, 0) 100%
    );

    @media (max-width: 768px) {
      width: 8.75rem;
      height: 8.75rem;
    }
  }

  & .result__number {
    color: ${theme.white};
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: 800;

    @media (max-width: 768px) {
      font-size: 3.5rem;
      line-height: 3.5rem;
    }
  }

  & .result__total__number {
    color: ${theme.lightBlue};
    opacity: 0.5168;
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1rem;
    }
  }

  & .result__subtitle {
    color: ${theme.white};
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 700;
    padding-top: 1.75rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      line-height: 1.5rem;
      padding-top: 1.5rem;
    }
  }

  & .result__paragraph {
    color: ${theme.lightBlue};
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 500;
    width: 16.25rem;
    text-align: center;
    padding-top: 14px;

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.125rem;
      padding-top: 0.5rem;
    }
  }

  & .summary {
    border-radius: 2rem;
    background-color: ${theme.white};
    width: 18rem;

    @media (max-width: 768px) {
      width: 19.5rem;
    }
  }

  & .summary__title {
    color: ${theme.darkNavy};
    padding-bottom: 1.75rem;

    @media (max-width: 768px) {
      padding-bottom: 1.5rem;
    }
  }
`;

export const SummaryCards = styled.div`
  font-size: 18px;
  line-height: 23px;
  font-weight: 500;
  padding: 16px;
  border-radius: 12px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  padding-top: 2rem;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.5rem;
    padding-top: 1.5rem;
  }
`;
