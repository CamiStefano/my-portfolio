import React from 'react';
import { Hanken_Grotesk } from 'next/font/google';
import { Wrapper, Title, Card, SummaryCards } from './styles';

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
          <div className="summary__cards">
            <SummaryCards className="summary__reaction">
              <span className="summary__reaction__img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.8333 8.33333V2.5L4.16663 11.6667H9.16663V17.5L15.8333 8.33333H10.8333Z"
                    stroke="#FF5555"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="summary__reaction__p">Reaction</span>
            </SummaryCards>
          </div>
        </div>
      </Card>
    </Wrapper>
  );
}
