'use client';

import React from 'react';
import { styled } from 'styled-components';
import { theme, Title } from '../styles';
import Button from './Button';
import StatCard from './StatCard';
import { BrainSVG, ThunderSVG, VerbalSVG, VisualSVG } from '../icons';

const StyledSummary = styled.div`
  border-radius: 2rem;
  background-color: ${theme.white};
  width: 18rem;

  @media (max-width: 768px) {
    width: 19.5rem;
  }

  & .title {
    color: ${theme.darkNavy};
    padding-bottom: 1.75rem;

    @media (max-width: 768px) {
      padding-bottom: 1.5rem;
    }
  }
`;

function Result() {
  return (
    <StyledSummary className="summary">
      <Title className="title">Summary</Title>
      <div className="cards">
        <StatCard icon={<ThunderSVG />} label="Reaction" points={80} color="#FF5555" />
        <StatCard icon={<BrainSVG />} label="Memory" points={92} color="#FFB21E" />
        <StatCard icon={<VerbalSVG />} label="Verbal" points={61} color="#00BB8F" />
        <StatCard icon={<VisualSVG />} label="Visual" points={73} color="#1125D6" />
      </div>
      <Button>Continue</Button>
    </StyledSummary>
  );
}

export default Result;
