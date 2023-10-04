'use client';

import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';
import { HiLocationMarker, HiLink } from 'react-icons/hi';
import { FaXTwitter } from 'react-icons/fa6';
import { BsBuildingsFill } from 'react-icons/bs';
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

  & .avatarContainer {
    display: flex;
  }

  & .dataContainer {
    display: flex;
  }
`;

function UserCardContainer() {
  return (
    <Container>
      <StyledUserCardContainer>
        <div className="avatarContainer">
          <Image
            className="gitHubAvatar"
            src="/gitHubAvatar.png"
            width={117}
            height={117}
            alt="GitHub Avatar"
          />
          <div>
            <p>The Octocat</p>
            <p>@octocat</p>
          </div>
          <div>
            <p>Joined 25 Jan 2011</p>
          </div>
        </div>
        <div className="dataContainer">
          <div>
            <div>
              <p>This profile has no bio</p>
            </div>
          </div>
          <div>
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
          </div>
        </div>
        <StatCard />
      </StyledUserCardContainer>
    </Container>
  );
}

export default UserCardContainer;
