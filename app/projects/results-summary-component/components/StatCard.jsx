'use client';

import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../styles';

const StyledStatCard = styled.div`
  width: 100%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%),
    ${(props) => props.color || 'grey'};
  color: ${(props) => props.color || 'grey'};
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  & .img {
    color: ${(props) => props.color};
    padding-right: 12px;
    vertical-align: middle;
  }

  & .label {
    font-weight: 500;
    font-size: 18px;
  }

  & .points {
    color: ${theme.darkNavy};
    font-weight: 700;
  }

  & .total {
    color: ${theme.darkNavy};
    font-weight: 700;
    opacity: 0.5;
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
        <span className="total">/ 100</span>
      </div>
    </StyledStatCard>
  );
}

export default StatCard;
