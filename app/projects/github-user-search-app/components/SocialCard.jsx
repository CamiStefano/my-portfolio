'use client';

import React from 'react';
import { styled } from 'styled-components';
import { HiLocationMarker, HiLink } from 'react-icons/hi';
import { FaXTwitter } from 'react-icons/fa6';
import { BsBuildingsFill } from 'react-icons/bs';
import { Container } from '../styles';

const StyledSocialCardContainer = styled.div`
  max-width: 30rem;
  display: flex;
  margin-left: 9.62rem;
  justify-content: space-between;
  padding: 0rem 2rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

function SocialCardContainer() {
  return (
    <Container>
      <StyledSocialCardContainer>
        <div>
          <p>
            <HiLocationMarker />
            San Francisco
          </p>
        </div>
        <div>
          <p>
            <FaXTwitter />
            Not Available
          </p>
        </div>
        <div>
          <p>
            <HiLink />
            <a href="https://github.blog">https://github.blog</a>
          </p>
        </div>
        <div>
          <p>
            <BsBuildingsFill />
            <a href="http://www.github.com/github">@github</a>
          </p>
        </div>
      </StyledSocialCardContainer>
    </Container>
  );
}

export default SocialCardContainer;
