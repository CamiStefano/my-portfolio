'use client';

import styled from 'styled-components';

export const theme = {
  light: '#FFFFFF',
  dark: '#13183F',
  grey: '#83869A',
  lightBlue: '#666CA3',
  pink: '#F74780',
  lightPink: '#FFA7C3',
  gradient1: 'linear-gradient(180deg, #FF6F48 0.04%, #F02AA6 100%);',
  gradient1hover:
    'linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%);',
  gradient2: 'linear-gradient(180deg, #4851FF 0%, #F02AA6 99.92%);',
  gradient2hover:
    'linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(180deg, #4851FF 0%, #F02AA6 100%);',

  gradient3: 'linear-gradient(180deg, #FFF 0%, #F0F1FF 100%)',
};

export const Wrapper = styled.section`
  width: 100%;
  max-width: 2100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.gradient3};
  padding: 0rem 2rem;

  ::selection {
    background: ${theme.pink};
    color: ${theme.light};
  }

  & .container {
    width: 100%;
    max-width: 1110px;

    @media only screen and (min-width: 765px) and (max-width: 1279px) {
      max-width: 768px;
    }

    @media (max-width: 764px) {
      max-width: 343px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  line-height: normal;
  font-weight: 800;
  color: ${theme.dark};

  @media (max-width: 820px) {
    font-size: 2.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: ${theme.grey};
  padding: 1.81rem 0rem 2.5rem;
  max-width: 28rem;

  @media (max-width: 820px) {
    font-size: 1rem;
    line-height: 1.625rem;
    padding: 1.5rem 0rem;
    max-width: 24rem;
  }
`;
