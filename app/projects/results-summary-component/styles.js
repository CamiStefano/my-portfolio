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
  align-items: center;
  background-color: ${theme.lightGray};
`;

export const Card = styled.section`
  display: flex;
  background-color: ${theme.white};
  border-radius: 32px;
  width: 736px;
  height: 512px;

  & .card {
  }
  & .result {
    width: 368px;
    height: 512px;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, #75f 0%, #6943ff 0.01%, #2f2ce9 100%);
  }

  & .result__title {
    color: ${theme.lightBlue};
    padding-bottom: 35px;
  }

  & .result__circle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background: linear-gradient(
      180deg,
      #4d21c9 0%,
      rgba(37, 33, 201, 0) 100%,
      rgba(37, 33, 201, 0) 100%
    );
  }

  & .result__number {
    color: ${theme.white};
    font-size: 72px;
    line-height: 72px;
    font-weight: 800;
  }

  & .result__subtitle {
    color: ${theme.white};
    font-size: 32px;
    line-height: 42px;
    font-weight: 700;
    padding-top: 28px;
  }

  & .result__paragraph {
    color: ${theme.lightBlue};
    font-size: 18px;
    line-height: 23px;
    font-weight: 500;
    width: 260px;
    text-align: center;
    padding-top: 14px;
  }

  & .result__total__number {
    color: ${theme.lightBlue};
    opacity: 0.5168;
    font-size: 18px;
    line-height: 23px;
    font-weight: 700;
  }

  & .summary {
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    background-color: ${theme.white};
  }

  & .summary__title {
    color: ${theme.lightBlue};
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 31px;
  font-weight: 700;
  padding-top: 38px;
`;

export const Paragraph = styled.p`
  font-size: 15px;
`;
