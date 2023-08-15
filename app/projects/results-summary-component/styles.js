'use client';

import styled from 'styled-components';

const theme = {
  white: '#FFFFFF',
  red: '#FF5555',
  yelow: '#FFB21E',
  green: '#00BB8F',
  blue: '#1125D6',
  lightBlue: '#CAC9FF',
  darkNavy: '#303B59',
  gradient1: 'linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%);',
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

  & .result {
    width: 368px;
    height: 512px;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${theme.gradient1};
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
    background-color: ${theme.white};
    width: 288px;
    padding-left: 40px;
  }

  & .summary__title {
    color: ${theme.darkNavy};
    padding-bottom: 28px;
  }

  & .summary__reaction__cards {
    width: 288px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%),
      #f55;
    color: ${theme.darkNavy};
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  & .summary__reaction__img {
    padding-right: 12px;
    vertical-align: middle;
  }

  & .summary__reaction__p {
    color: ${theme.red};
    font-weight: 500;
    font-size: 18px;
  }

  & .summary__number {
    color: ${theme.darkNavy};
    font-weight: 700;
  }

  & .summary__number__total {
    color: ${theme.darkNavy};
    font-weight: 700;
    opacity: 0.5;
  }

  & .summary__memory__img {
    padding-right: 12px;
    vertical-align: middle;
  }

  & .summary__memory__p {
    color: ${theme.yelow};
    font-weight: 500;
    font-size: 18px;
  }

  & .summary__memory__cards {
    width: 288px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%),
      #ffb21e;
    color: ${theme.darkNavy};
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  & .summary__verbal__img {
    padding-right: 12px;
    vertical-align: middle;
  }

  & .summary__verbal__p {
    color: ${theme.green};
    font-weight: 500;
    font-size: 18px;
  }

  & .summary__verbal__cards {
    width: 288px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%),
      #00bb8f;
    color: ${theme.darkNavy};
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  & .summary__visual__img {
    padding-right: 12px;
    vertical-align: middle;
  }

  & .summary__visual__p {
    color: ${theme.blue};
    font-weight: 500;
    font-size: 18px;
  }

  & .summary__visual__cards {
    width: 288px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%),
      #1125d6;
    color: ${theme.darkNavy};
    display: flex;
    justify-content: space-between;
    margin-bottom: 41px;
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
  font-size: 24px;
  line-height: 31px;
  font-weight: 700;
  padding-top: 38px;
`;

export const Button = styled.button`
  width: 288px;
  height: 56px;
  border-radius: 128px;
  border: none;
  background: ${theme.darkNavy};
  color: ${theme.white};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: .3 linear;

  &.button:hover {
    background: ${theme.gradient1};
  }
`;
