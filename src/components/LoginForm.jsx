import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import { verifyPassword, handleSession } from '../config/auth';

const FormContainer = styled.div`
  background: var(--background-box);
  padding: var(--s-unit-4);
  border-radius: var(--rounded-md);
  box-shadow: var(--shadow-default);
  width: 100%;
  max-width: 400px;

  &:hover {
    box-shadow: var(--shadow-hover);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--s-unit-3);
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-unit);
`;

const Label = styled.label`
  font-family: var(--font-family);
  font-size: var(--small);
  color: var(--text-soft);
  font-weight: 500;
`;

const ErrorMessage = styled.div`
  color: var(--error);
  font-size: var(--small);
  margin-top: var(--s-unit);
`;

const LoginForm = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const isValid = await verifyPassword(password);
      
      if (isValid) {
        handleSession.create();
        navigate('/dashboard', { replace: true });
      } else {
        setError('Contraseña incorrecta');
      }
    } catch (err) {
      setError('Ocurrió un error al verificar la contraseña');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </InputGroup>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Verificando...' : 'Iniciar Sesión'}
        </Button>
      </Form>
    </FormContainer>
  );
};

export default LoginForm; 