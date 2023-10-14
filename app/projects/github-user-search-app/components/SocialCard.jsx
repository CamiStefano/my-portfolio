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
    flex-direction: column;
    padding-top: 1rem;

    & div {
      display: flex;

      & p {
        color: ${({ theme }) => theme.lightBlue};
        display: flex;
        align-items: center;
        line-height: 1.5rem;

        & a:hover {
          text-decoration: underline;
        }

        & span {
          padding-left: 1rem;
          font-size: 0.9375rem;
        }
      }
    }
  }

  @media only screen and (min-width: 328px) and (max-width: 729px) {
    max-width: 573px;
    margin-left: 0rem;
  }

  @media (max-width: 572px) {
    max-width: 327px;

    & div {
      padding-top: 0.5rem;

      & span {
        padding-left: 0rem;
        font-size: 0.8125rem;
      }
    }
  }
`;

function SocialCardContainer() {
  return (
    <Container>
      <StyledSocialCardContainer>
        <div>
          <div>
            <p>
              <HiLocationMarker />
              <span>San Francisco</span>
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
        </div>
        <div>
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
              <BsBuildingsFill />
              <span>
                <a href="http://www.github.com/github">@github</a>
              </span>
            </p>
          </div>
        </div>
      </StyledSocialCardContainer>
    </Container>
  );
}

export default SocialCardContainer;
