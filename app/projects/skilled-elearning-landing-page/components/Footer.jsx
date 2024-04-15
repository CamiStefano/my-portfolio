'use client';

import React from 'react';
import { styled } from 'styled-components';
import { Container, theme } from '../styles';
import { LogoLight } from '../icons';
import Button from './Button';

const Background = styled.footer`
  width: 100%;
  background-color: ${theme.dark};
  padding: 0rem 2rem;
`;

const StyledFooter = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7.5rem;
  z-index: 10;

  @media (max-width: 768px) {
    max-width: 768px;
  }
`;

function Footer() {
  return (
    <Background>
      <Container>
        <StyledFooter>
          <LogoLight />
          <Button variant="secondary">Get Started</Button>
        </StyledFooter>
      </Container>
    </Background>
  );
}

export default Footer;
