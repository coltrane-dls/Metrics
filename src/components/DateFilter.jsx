import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--s-unit-2);
  margin-bottom: var(--s-unit-4);
  padding: var(--s-unit-2);
  background: var(--background-box);
  border-radius: var(--rounded-md);
  box-shadow: var(--shadow-default);
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: var(--s-unit-2);
`;

const Select = styled.select`
  padding: var(--s-unit) var(--s-unit-2);
  border: 1px solid var(--border-neutral);
  border-radius: var(--rounded-sm);
  font-family: var(--font-family);
  font-size: var(--body);
  color: var(--text);
  background: var(--background-soft);
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const DateFilter = ({ onFilterChange }) => {
  const currentYear = new Date().getFullYear();

  return (
    <FilterContainer>
      <FilterGroup>
        <Select 
          defaultValue="2024" 
          onChange={(e) => onFilterChange('year', e.target.value)}
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </Select>
        <Select 
          defaultValue="all" 
          onChange={(e) => onFilterChange('period', e.target.value)}
        >
          <option value="all">Todo el año</option>
          <option value="Q1">Q1</option>
          <option value="Q2">Q2</option>
          <option value="Q3">Q3</option>
          <option value="Q4">Q4</option>
        </Select>
        <Select 
          defaultValue="month" 
          onChange={(e) => onFilterChange('timeframe', e.target.value)}
        >
          <option value="day">Por día</option>
          <option value="week">Por semana</option>
          <option value="month">Por mes</option>
          <option value="quarter">Por trimestre</option>
        </Select>
      </FilterGroup>
      <FilterGroup>
        <Button 
          style={{
            backgroundColor: 'var(--background)',
            color: 'var(--text)',
            padding: 'var(--s-unit) var(--s-unit-2)',
          }}
          onClick={() => onFilterChange('reset')}
        >
          Reiniciar filtros
        </Button>
      </FilterGroup>
    </FilterContainer>
  );
};

export default DateFilter; 