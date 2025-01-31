import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MetricCard from '../components/MetricCard';
import DateFilter from '../components/DateFilter';
import ProductiveHoursChart from '../components/charts/ProductiveHoursChart';
import TimelineChart from '../components/charts/TimelineChart';

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: var(--background);
`;

const MainContent = styled.main`
  margin-left: 250px;
  padding: 84px var(--s-unit-3) var(--s-unit-3);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--s-unit-3);
  margin-top: var(--s-unit-3);
`;

const Value = styled.div`
  font-size: var(--h2);
  color: var(--text);
  font-weight: 600;
  margin-bottom: var(--s-unit-2);
`;

const HeaderSection = styled.div`
  margin-bottom: var(--s-unit-4);
`;

const Title = styled.h1`
  font-size: var(--h2);
  color: var(--text);
  margin-bottom: var(--s-unit-3);
`;

const metricsData = [
  {
    title: "Horarios Productivos",
    value: "9:00 AM - 6:00 PM",
    chart: <ProductiveHoursChart />
  },
  {
    title: "Tiempo Promedio por Archivo",
    value: "2.5 horas",
    chart: <TimelineChart />
  },
  {
    title: "Colaboradores Activos",
    value: "24 usuarios",
    chart: <TimelineChart />
  },
  {
    title: "Comentarios por Archivo",
    value: "15 promedio",
    chart: <ProductiveHoursChart />
  },
  {
    title: "Archivos Abiertos",
    value: "45 esta semana",
    chart: <ProductiveHoursChart />
  },
  {
    title: "Prototipos Activos",
    value: "12 últimos 7 días",
    chart: <ProductiveHoursChart />
  },
  {
    title: "Tiempo de Edición",
    value: "1.8 horas/prototipo",
    chart: <TimelineChart />
  },
  {
    title: "Revisiones por Archivo",
    value: "8 promedio",
    chart: <ProductiveHoursChart />
  },
  {
    title: "Reutilización de Componentes",
    value: "65% del equipo",
    chart: <ProductiveHoursChart />
  },
  {
    title: "Actividad por Equipo",
    value: "UX Team: 75%",
    chart: <ProductiveHoursChart />
  }
];

const Dashboard = () => {
  const [filters, setFilters] = useState({
    year: '2024',
    period: 'all',
    timeframe: 'month'
  });

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'reset') {
      setFilters({
        year: '2024',
        period: 'all',
        timeframe: 'month'
      });
    } else {
      setFilters(prev => ({
        ...prev,
        [filterType]: value
      }));
    }
    // Aquí podrías actualizar los datos de las métricas según los filtros
    console.log('Filtros actualizados:', filters);
  };

  return (
    <DashboardContainer>
      <Navbar />
      <Sidebar />
      <MainContent>
        <HeaderSection>
          <Title>Vista General</Title>
          <DateFilter onFilterChange={handleFilterChange} />
        </HeaderSection>
        <GridContainer>
          {metricsData.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
            >
              <Value>{metric.value}</Value>
              {metric.chart}
            </MetricCard>
          ))}
        </GridContainer>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard; 