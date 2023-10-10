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
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 3rem;

  div {
    display: flex;
    padding-top: 1.3rem;

    & p {
      color: ${({ theme }) => theme.lightBlue};

      & a:hover {
        text-decoration: underline;
      }

      & span {
        padding-left: 1rem;
      }
    }
  }

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
            <span>San Francisco</span>
          </p>
        </div>
        <div className="disabled">
          <p>
            <FaXTwitter />
            <span>
              <a href="https://github.blog">Not Available</a>
            </span>
          </p>
        </div>
        <div>
          <p>
            <HiLink />
            <span>
              <a href="https://github.blog">https://github.blog</a>
            </span>
          </p>
        </div>
        <div>
          <p>
            <BsBuildingsFill />
            <span>
              <a href="http://www.github.com/github">@github</a>
            </span>
          </p>
        </div>
      </StyledSocialCardContainer>
    </Container>
  );
}

export default SocialCardContainer;
