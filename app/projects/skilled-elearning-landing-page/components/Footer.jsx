'use client';

import React from 'react';
import { styled } from 'styled-components';
import { Container, theme } from '../styles';
import { LogoLight } from '../icons';
import Button from './Button';

const Background = styled.footer`
  width: 100%;
  background-color: ${theme.dark};
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7.5rem;
  padding: 0rem 2.5rem;

  & button {
    background: ${theme.gradient2};

    &:hover {
      background: ${theme.gradient2hover};
    }
  }

  & .title {
    color: ${theme.darkNavy};
    padding-bottom: 1.75rem;

    @media (max-width: 768px) {
      padding-bottom: 1.5rem;
    }
  }
`;

function Footer() {
  return (
    <Background>
      <Container>
        <StyledFooter>
          <LogoLight />
          <Button>Get Started</Button>
        </StyledFooter>
      </Container>
    </Background>
  );
}

export default Footer;
