import React from 'react';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background: var(--background);
`;

const WelcomeSection = styled.section`
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
`;

const Title = styled.h1`
  font-family: var(--font-family);
  font-size: var(--display);
  font-weight: 600;
  color: var(--text);
  margin-bottom: var(--s-unit-3);
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-family: var(--font-family);
  font-size: var(--h4);
  font-weight: 400;
  color: var(--text-soft);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  letter-spacing: -0.01em;
`;

const Home = () => {
  return (
    <HomeContainer style={{ background: 'var(--background-soft)' }}>
      <WelcomeSection>
        <Title style={{ color: 'var(--text)', fontSize: '2.5rem' }}>Dashboard de Métricas de Diseño</Title>
        <Subtitle style={{ color: 'var(--text)', fontSize: '1.125rem' }}>
          Bienvenido a tu centro de análisis de diseño. Obtén insights valiosos
          de Figma y métricas de negocio en un solo lugar.
        </Subtitle>
      </WelcomeSection>
      <LoginForm />
      <div style={{ 
        position: 'fixed',
        bottom: '20px',
        textAlign: 'center',
        width: '100%',
        fontFamily: 'var(--font-family)',
        fontSize: '12px',
        color: 'var(--text-soft)'
      }}>
        <span>Al continuar, aceptas nuestros </span>
        <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Términos y Condiciones</a>
        <span> y </span>
        <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Aviso de Privacidad</a>
      </div>
      <div style={{
        marginTop: 'var(--s-unit-4)',
        textAlign: 'center',
        fontFamily: 'var(--font-family)',
        fontSize: '14px',
        color: 'var(--text-soft)',
        fontStyle: 'italic'
      }}>
        Con Diseño, Tech y Resultados - Atte: CoE
      </div>
    </HomeContainer>
  );
};

export default Home; 