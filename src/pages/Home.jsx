import React from 'react';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const WelcomeSection = styled.section`
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Home = () => {
  return (
    <HomeContainer>
      <WelcomeSection>
        <Title>Dashboard de Métricas de Diseño</Title>
        <Subtitle>
          Bienvenido a tu centro de análisis de diseño. Obtén insights valiosos
          de Figma y métricas de negocio en un solo lugar.
        </Subtitle>
      </WelcomeSection>
      <LoginForm />
    </HomeContainer>
  );
};

export default Home; 