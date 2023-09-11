'use client';

import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../styles';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 20rem;
  height: 19rem;
  border-radius: 0.9375rem;
  background: ${theme.light};
  padding: 4rem 2rem 2.5rem;
  position: relative;
  margin-top: 3rem;

  @media (max-width: 820px) {
    gap: 1rem;
    width: 21rem;
    height: 16rem;
    padding: 3.5rem 1.2rem 2rem 2rem;
  }

  & .img {
    position: absolute;
    top: -1.5rem;
  }

  & .subtitle {
    color: ${theme.dark};
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 2rem;

    @media (max-width: 820px) {
      font-size: 1.25rem;
      line-height: normal;
    }
  }

  & .label {
    color: ${theme.grey};
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.75rem;
    flex-grow: 1;

    @media (max-width: 820px) {
      font-size: 1rem;
      line-height: 1.625rem;
    }
  }

  & .link {
    color: ${theme.pink};
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    transition: all 0.5s ease;

    &:hover {
      color: ${theme.lightPink};
    }
  }
`;

function Cards({ icon, subtitle, label }) {
  return (
    <StyledCard>
      <span className="img">{icon}</span>
      <h2 className="subtitle">{subtitle}</h2>
      <p className="label">{label}</p>
      <Link className="link" href="/projects/skilled-elearning-landing-page/">
        Get Started
      </Link>
    </StyledCard>
  );
}

export default Cards;
