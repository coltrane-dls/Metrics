import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: var(--background-box);
  border-radius: var(--rounded-md);
  padding: var(--s-unit-3);
  box-shadow: var(--shadow-default);
  height: 100%;
`;

const Title = styled.h3`
  font-size: var(--body);
  color: var(--text-soft);
  margin: 0 0 var(--s-unit-2) 0;
`;

const Value = styled.div`
  font-size: var(--h2);
  color: var(--text);
  font-weight: 600;
  margin-bottom: var(--s-unit-2);
`;

const ChartContainer = styled.div`
  margin-top: var(--s-unit-2);
`;

const MetricCard = ({ title, value, children }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Value>{value}</Value>
      <ChartContainer>
        {children}
      </ChartContainer>
    </Card>
  );
};

export default MetricCard; 