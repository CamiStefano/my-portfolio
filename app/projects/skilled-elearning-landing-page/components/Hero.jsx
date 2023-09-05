'use client';

import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';
import { theme, Title, Paragraph } from '../styles';
import Button from './Button';

const StyledHero = styled.section`
  display: flex;
  padding: 7rem 0rem 0rem;
  height: 42rem;

  @media (max-width: 1280px) {
    padding: 6rem 0rem 0rem;
    height: 36rem;
  }

  & .main__section__text {
    display: flex;
    flex-direction: column;
    width: 29rem;

    @media (max-width: 820px) {
      max-width: 28rem;
    }
  }

  & .main__section__image {
    position: absolute;
    top: 0;
    right: 0;
  }

  & .desktop_image {
    display: block;

    @media only screen and (max-width: 1280px) {
      display: none;
    }
  }

  & .tablet_image {
    display: none;

    @media only screen and (min-width: 376px) and (max-width: 1279px) {
      display: block;
    }
  }

  & .mobile_image {
    display: none;

    @media only screen and (max-width: 375px) {
      display: block;
    }
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
          className="desktop_image"
          src="/image-hero-desktop.png"
          width={710}
          height={791}
          alt="Picture of a person drinking coffee"
        />

        <Image
          className="tablet_image"
          src="/image-hero-tablet.png"
          width={397}
          height={630}
          alt="Picture of a person drinking coffee"
        />

        <Image
          className="mobile_image"
          src="/image-hero-mobile.png"
          width={375}
          height={409}
          alt="Picture of a person drinking coffee"
        />
      </div>
    </StyledHero>
  );
}

export default Hero;
