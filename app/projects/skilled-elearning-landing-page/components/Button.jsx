'use client';

import { styled } from 'styled-components';
import { theme } from '../styles';

const Button = styled.button`
  width: 10.4375rem;
  height: 3.9375rem;
  border-radius: 1.96875rem;
  border: none;
  color: ${theme.light};
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 8.75rem;
    height: 3rem;
    border-radius: 1.75rem;
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`;

export default Button;
