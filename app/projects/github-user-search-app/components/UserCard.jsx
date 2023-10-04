'use client';

import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';
import StatCard from './StatCard';
import { Container, theme } from '../styles';

const StyledUserCardContainer = styled.section`
  width: 100%;
  min-height: 26.1875rem;
  height: 100%;
  border-radius: 0.9375rem;
  background: #fefefe;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  padding: 3rem;
  font-family: inherit;
  display: flex;
  background-color: ${theme.white};
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
        color: ${theme.primaryDark};
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
        color: ${theme.tertiaryLight};
        font-size: 0.9375rem;
      }
    }
  }

  & .dataContainer {
    display: flex;
    margin-top: -2rem;
    margin-left: 9.62rem;
    min-height: 3.125rem;

    h3 {
      font-size: 0.9375rem;
      font-weight: 400;
      line-height: 1.5625rem;
      color: ${theme.lightBlue};
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
          />
          <div className="gitHubUser">
            <h1>The Octocat</h1>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              @octocat
            </a>
          </div>
          <div className="gitHubUserJoined">
            <p>Joined 25 Jan 2011</p>
          </div>
        </div>
        <div className="dataContainer">
          <div>
            <div>
              <h3>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
                volutpat mattis eros.
              </h3>
            </div>
          </div>
        </div>
        <StatCard />
      </StyledUserCardContainer>
    </Container>
  );
}

export default UserCardContainer;
