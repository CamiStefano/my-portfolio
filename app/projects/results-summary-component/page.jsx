import React from 'react';
import { Outfit } from 'next/font/google';
import { Wrapper, Title, Card } from './styles';

export const outfit = Outfit({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Results summary component',
};

export default function ResultsSummary() {
  return (
    <Wrapper className={outfit.className}>
      <Card className="card">
        <div className="results">
          <Title className="results__title">Your Result</Title>
          <div className="results__circle">
            <p className="">76</p>
            <p>of 100</p>
          </div>
        </div>
        <div className="summary">
          <Title className="summary__title">Summary</Title>
        </div>
      </Card>
    </Wrapper>
  );
}
