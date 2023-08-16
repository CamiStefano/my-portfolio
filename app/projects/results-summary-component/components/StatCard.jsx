'use client';

import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../styles';

const StyledStatCard = styled.div`
  width: 100%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%),
    #f55;
  color: ${theme.darkNavy};
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  & .img {
    padding-right: 12px;
    vertical-align: middle;
  }

  & .label {
    color: ${theme.red};
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

function StatCard({ icon, label, points }) {
  return (
    <StyledStatCard>
      <div>
        <span className="img">{icon}</span>
        <span className="label">{label}</span>
      </div>
      <div>
        <span className="points">{points}</span>
        <span className="total">/ 100</span>
      </div>
    </StyledStatCard>
  );
}

export default StatCard;
