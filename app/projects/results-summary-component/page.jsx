import React from 'react';

import { Hanken_Grotesk } from 'next/font/google';
import { Wrapper, Title, Card } from './styles';
import Button from './components/Button';
import StatCard from './components/StatCard';
import { BrainSVG, ThunderSVG, VerbalSVG, VisualSVG } from './icons';

export const HankenGrotesk = Hanken_Grotesk({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Results summary component',
};

export default function ResultsSummary() {
  return (
    <Wrapper className={HankenGrotesk.className}>
      <Card className="cmard">
        <div className="result">
          <Title className="result__title">Your Result</Title>
          <div className="result__circle">
            <p className="result__number">76</p>
            <p className="result__total__number">of 100</p>
          </div>
          <p className="result__subtitle">Great</p>
          <p className="result__paragraph">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
        <div className="summary">
          <Title className="summary__title">Summary</Title>
          <div className="summary__cards">
            <StatCard icon={<ThunderSVG />} label="Reaction" points={80} color="#FF5555" />
            <StatCard icon={<BrainSVG />} label="Memory" points={92} color="#FFB21E" />
            <StatCard icon={<VerbalSVG />} label="Verbal" points={61} color="#00BB8F" />
            <StatCard icon={<VisualSVG />} label="Visual" points={73} color="#1125D6" />
          </div>
          <Button>Continue</Button>
        </div>
      </Card>
    </Wrapper>
  );
}
