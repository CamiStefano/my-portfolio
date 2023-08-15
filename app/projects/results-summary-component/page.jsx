import React from 'react';
import { Hanken_Grotesk } from 'next/font/google';
import { Wrapper, Title, Card } from './styles';

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
      <Card className="card">
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
        </div>
      </Card>
    </Wrapper>
  );
}
