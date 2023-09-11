'use client';

import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';
import { theme, Title, Paragraph, Container } from '../styles';
import Button from './Button';

const StyledHero = styled.section`
  display: flex;
  padding: 7rem 0rem 0rem;
  height: 42rem;

  & .main__section__text {
    display: flex;
    flex-direction: column;
    max-width: 29rem;

    @media only screen and (max-width: 820px) {
      max-width: 28rem;
    }

    @media only screen and (max-width: 764px) {
      padding-bottom: 2.8rem;
    }
  }

  & .main__section__image {
    position: absolute;
    top: 0;
    right: 0;

    @media only screen and (max-width: 764px) {
      display: flex;
      position: static;
    }
  }

  & .desktop_image {
    display: block;

    @media only screen and (max-width: 1280px) {
      display: none;
    }
  }

  & .tablet_image {
    display: none;

    @media only screen and (min-width: 765px) and (max-width: 1280px) {
      display: block;
    }
  }

  & .mobile_image {
    display: none;

    @media only screen and (max-width: 764px) {
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

  @media only screen and (max-width: 1280px) {
    padding: 4rem 0rem 0rem;
    height: 32rem;
  }

  @media only screen and (max-width: 764px) {
    padding: 1rem 0rem 0rem;
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

function Hero() {
  return (
    <Container>
      <StyledHero>
        <div className="main__section__text">
          <Title>Maximize skill, minimize budget</Title>
          <Paragraph>
            Our modern courses across a range of in-demand skills will give you the knowledge you
            need to live the life you want.
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
            priority
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
    </Container>
  );
}

export default Hero;
