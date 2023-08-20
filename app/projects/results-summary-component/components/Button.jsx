'use client';

import { styled } from 'styled-components';
import { theme } from '../styles';

const Button = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 128px;
  border: none;
  background: ${theme.darkNavy};
  color: ${theme.white};
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s ease;
  margin-top: 1.5rem;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
    background: ${theme.gradient1};
  }
`;

export default Button;
