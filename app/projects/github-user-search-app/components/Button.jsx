'use client';

import { styled } from 'styled-components';
import { theme } from '../styles';

const Button = styled.button`
  width: 6.625rem;
  height: 3.125rem;
  border-radius: 0.625rem;
  border: none;
  background: #0079ff;
  color: ${theme.white};
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s ease;
  font-family: inherit;

  &:hover {
    background: #60abff;
  }

  &:active {
    background: #60abff;
  }

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

export default Button;
