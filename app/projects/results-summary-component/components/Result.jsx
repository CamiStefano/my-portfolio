'use client';

import React from 'react';
import { styled } from 'styled-components';
import { theme, Title } from '../styles';

const StyledResult = styled.div`
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

  & .title {
    color: ${theme.lightBlue};
    padding-bottom: 2rem;

    @media (max-width: 768px) {
      padding-bottom: 1.5rem;
    }
  }

  & .circle {
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

  & .number {
    color: ${theme.white};
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: 800;

    @media (max-width: 768px) {
      font-size: 3.5rem;
      line-height: 3.5rem;
    }
  }

  & .total__number {
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

  & .subtitle {
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

  & .paragraph {
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
`;

function Result() {
  return (
    <StyledResult className="result">
      <Title className="title">Your Result</Title>
      <div className="circle">
        <p className="number">76</p>
        <p className="total__number">of 100</p>
      </div>
      <p className="subtitle">Great</p>
      <p className="paragraph">
        Your performance exceed 65% of the people conducting the test here!
      </p>
    </StyledResult>
  );
}

export default Result;
