'use client';

import { styled, css } from 'styled-components';
import { theme } from '../styles';

const Button = styled.button`
  position: relative;
  width: 10.4375rem;
  height: 3.9375rem;
  border-radius: 1.96875rem;
  border: none;
  color: #fff;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s ease;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 1.96875rem;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    transition: all 0.4s ease;
  }

  &:hover {
    &::before {
      opacity: 0.4;
    }
  }

  ${({ variant }) => {
    if (variant === 'primary') {
      return css`
        background: ${theme.gradient1};
      `;
    }

    if (variant === 'secondary') {
      return css`
        background: ${theme.gradient2};
      `;
    }

    return css`
      background: ${theme.dark};
    `;
  }}

  @media (max-width: 768px) {
    width: 8.75rem;
    height: 3rem;
    border-radius: 1.75rem;
    font-size: 1rem;
  }
`;

export default Button;
