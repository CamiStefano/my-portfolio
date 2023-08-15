'use client';

import styled from 'styled-components';

const theme = {
  white: '#FFFFFF',
  lightGray: 'hsl(212, 45%, 89%)',
  lightBlue: '#CAC9FF',
  grayishBlue: 'hsl(220, 15%, 55%)',
  darkBlue: 'hsl(218, 44%, 22%)',
  darkNavy: '#303B59',
};

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${theme.lightGray};
`;

export const Card = styled.section`
  & .card {
    display: flex;
    background-color: ${theme.white};
  }
  & .result {
    width: 368px;
    height: 512px;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    border-radius: 32px;
    background: linear-gradient(180deg, #75f 0%, #6943ff 0.01%, #2f2ce9 100%);
  }

  & .results__title {
    color: ${theme.lightBlue};
  }

  & .results__circle {
    width: 200px;
    height: 200px;
    background: linear-gradient(
      180deg,
      #4d21c9 0%,
      rgba(37, 33, 201, 0) 100%,
      rgba(37, 33, 201, 0) 100%
    );
  }

  & .summary {
    width: 736px;
    height: 512px;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
  }

  & .summary__title {
    color: ${theme.lightBlue};
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 31px;
  font-weight: 700;
`;

export const Paragraph = styled.p`
  font-size: 15px;
`;
