import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';

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

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación
    console.log('Datos del formulario:', formData);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ejemplo@correo.com"
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            required
          />
        </InputGroup>
        <Button type="submit">Iniciar Sesión</Button>
      </Form>
    </FormContainer>
  );
};

export default LoginForm; 