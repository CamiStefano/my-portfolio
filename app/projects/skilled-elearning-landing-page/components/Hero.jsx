'use client';

import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';
import { theme, Title, Paragraph } from '../styles';
import Button from './Button';

const StyledHero = styled.section`
      display: flex;
      padding-top: 9rem;
      height: 45rem;

      & .main__section__text {
        display: flex;
        flex-direction: column;
        width: 29rem;
      }

      & .main__section__image {
      position: absolute;
      top: 0;
      right: 0;
    }

    & .button {
      background: ${theme.gradient1};
      transition: all 0.4s ease;

      &:hover {
        background: ${theme.gradient1hover};
      }
    }
`;

function Hero() {
  return (
    <StyledHero className="container">
      <div className="main__section__text">
        <Title>Maximize skill, minimize budget</Title>
        <Paragraph>
          Our modern courses across a range of in-demand skills will give you the knowledge you need
          to live the life you want.
        </Paragraph>
        <Button className="button">Get Started</Button>
      </div>
      <div className="main__section__image">
        <Image
          src="/person.png"
          width={710}
          height={791}
          alt="Picture of a person drinking coffee"
        />
      </div>
    </StyledHero>
  );
}

export default Hero;
