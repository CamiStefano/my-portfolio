'use client';

import { styled } from 'styled-components';
import { theme } from '../styles';

const Button = styled.button`
  width: 10.4375rem;
  height: 3.5rem;
  border-radius: 1.75rem;
  border: none;
  color: ${theme.light};
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

export default Button;
