'use client';

import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../styles';

const StyledStatCard = styled.div`
  width: 100%;
  border-radius: 0.75rem;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%),
    ${(props) => props.color || 'grey'};
  color: ${(props) => props.color || 'grey'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;

  & .img {
    color: ${(props) => props.color};
    padding-right: 0.75rem;
    vertical-align: middle;
  }

  & .label {
    font-weight: 500;
    font-size: 1.125rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  & .points {
    color: ${theme.darkNavy};
    font-weight: 700;
    font-size: 1.125rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  & .total {
    color: ${theme.darkNavy};
    font-weight: 700;
    font-size: 1.125rem;
    opacity: 0.5;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

function StatCard({ icon, label, points, color }) {
  return (
    <StyledStatCard color={color}>
      <div color={color}>
        <span className="img">{icon}</span>
        <span className="label" color={color}>
          {label}
        </span>
      </div>
      <div>
        <span className="points">{points}</span>
        <span className="total"> / 100</span>
      </div>
    </StyledStatCard>
  );
}

export default StatCard;
