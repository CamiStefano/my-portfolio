'use client';

import { styled } from 'styled-components';

export const theme = {
  white: '#FFFFFF',
  primaryLight: '#FEFEFE',
  secondaryLight: '#F6F8FF',
  tertiaryLight: '#697C9A',
  lightBlue: '#4B6A9B',
  primaryDark: '#2B3442',
  secondaryDark: '#141D2F',
  tertiaryDark: '#1E2A47',
  dark: '#222731',
};

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${theme.tertiaryDark};
  background-color: ${theme.secondaryLight};
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
