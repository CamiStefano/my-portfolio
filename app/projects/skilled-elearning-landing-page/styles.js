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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${theme.gradient3};
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  line-height: normal;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.5rem;
    padding-top: 1.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: ${theme.grey};

  @media (max-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.5rem;
    padding-top: 1.5rem;
  }
`;
