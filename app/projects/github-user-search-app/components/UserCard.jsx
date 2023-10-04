'use client';

import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';
import { HiLocationMarker, HiLink } from 'react-icons/hi';
import { FaXTwitter } from 'react-icons/fa6';
import { BsBuildingsFill } from 'react-icons/bs';
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
`;

function UserCardContainer() {
  return (
    <Container>
      <StyledUserCardContainer>
        <div>
          <Image
            className="gitHubAvatar"
            src="/gitHubAvatar.png"
            width={117}
            height={117}
            alt="GitHub Avatar"
          />
        </div>
        <div>
          <div>
            <p>
              <span>The Octocat</span>
              <span>Joined 25 Jan 2011</span>
            </p>
            <p>@octocat</p>
            <p>This profile has no bio</p>
          </div>
          <div>
            <div>
              <p>Repos</p>
              <p>8</p>
            </div>
            <div>
              <p>Followers</p>
              <p>3938</p>
            </div>
            <div>
              <p>Following</p>
              <p>9</p>
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
      </StyledUserCardContainer>
    </Container>
  );
}

export default UserCardContainer;
