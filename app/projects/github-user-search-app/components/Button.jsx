'use client';

import { styled } from 'styled-components';

const Button = styled.button`
  width: 6.625rem;
  height: 3.125rem;
  border-radius: 0.625rem;
  border: none;
  background: #0079ff;
  color: #ffffff;
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

  @media (max-width: 572px) {
    width: 5.25rem;
    height: 2.875rem;
    font-size: 0.875rem;
  }
`;

export default Button;
