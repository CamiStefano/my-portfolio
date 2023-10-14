'use client';

import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';
import StatCard from './StatCard';
import SocialCardContainer from './SocialCard';
import { Container } from '../styles';

const StyledUserCardContainer = styled.section`
  width: 100%;
  min-height: 26.1875rem;
  height: 100%;
  border-radius: 0.9375rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 3rem 3rem 1rem 3rem;
  font-family: inherit;
  display: flex;
  background: ${({ theme }) => theme.background};
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;

  & .profileContainer {
    display: flex;
    flex: 0 0;

    & .gitHubAvatar {
      margin-right: 2.3rem;
    }

    & .gitHubUser {
      flex: 1 1;

      h1 {
        font-size: 1.625rem;
        line-height: 2.4375rem;
        font-weight: 700;
        color: ${({ theme }) => theme.primaryDark};
      }
      a {
        font-size: 1rem;
        line-height: 1.5rem;
        color: #0079ff;
        transition: all 0.4s ease;

        &:hover {
          color: #60abff;
        }

        &:active {
          color: #60abff;
        }
      }
    }

    & .gitHubUserJoined {
      p {
        color: ${({ theme }) => theme.tertiaryLight};
        font-size: 0.9375rem;
      }
    }
  }

  & .dataContainer {
    display: flex;
    margin-top: -2rem;
    margin-left: 9.62rem;

    h3 {
      font-size: 0.9375rem;
      font-weight: 400;
      line-height: 1.5625rem;
      color: ${({ theme }) => theme.lightBlue};
    }
  }

  & .tabletOn {
    display: none;
  }

  & .deskOff {
  }

  @media only screen and (min-width: 328px) and (max-width: 729px) {
    max-width: 573px;

    & .tabletOn {
      display: block;
    }

    & .deskOff {
      display: none;
    }

    & .dataContainer {
      margin-top: 0rem;
      margin-left: 0rem;
      padding: 1.5rem 0rem 2rem 0rem;
    }
  }

  @media (max-width: 572px) {
    max-width: 327px;
    padding: 1.9rem 1.5rem;

    & .profileContainer {
      & .gitHubAvatar {
        margin-right: 1rem;
        max-width: 70px;
        max-height: 70px;
      }

      & .gitHubUser {
        h1 {
          font-size: 1rem;
          line-height: 1.5rem;
          font-weight: 700;
        }
        a {
          font-size: 0.8125rem;
          line-height: 1.1875rem;
          color: #0079ff;
        }
      }

      & .gitHubUserJoined {
        p {
          font-size: 0.8125rem;
        }
      }
    }

    & .dataContainer {
      padding: 1.4rem 0rem;

      h3 {
        font-size: 0.8125rem;
        line-height: 1.5625rem;
      }
    }
  }
`;

function UserCardContainer() {
  return (
    <Container>
      <StyledUserCardContainer>
        <div className="profileContainer">
          <Image
            className="gitHubAvatar"
            src="/gitHubAvatar.png"
            width={117}
            height={117}
            alt="GitHub Avatar"
            priority
          />
          <div className="gitHubUser">
            <h1>The Octocat</h1>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              @octocat
            </a>
            <div className="gitHubUserJoined tabletOn">
              <p>Joined 25 Jan 2011</p>
            </div>
          </div>
          <div className="gitHubUserJoined deskOff">
            <p>Joined 25 Jan 2011</p>
          </div>
        </div>
        <div className="dataContainer">
          <div>
            <div>
              <h3>This profile has no bio</h3>
            </div>
          </div>
        </div>
        <StatCard />
        <SocialCardContainer />
      </StyledUserCardContainer>
    </Container>
  );
}

export default UserCardContainer;
