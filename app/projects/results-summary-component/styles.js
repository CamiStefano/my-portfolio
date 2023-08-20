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
