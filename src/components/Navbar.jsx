import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { handleSession } from '../config/auth';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: var(--background-box);
  box-shadow: var(--shadow-default);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--s-unit-3);
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: var(--h4);
  font-weight: 600;
  color: var(--primary);
`;

const LogoutLink = styled.a`
  color: var(--primary);
  text-decoration: none;
  font-size: var(--body);
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    handleSession.destroy();
    navigate('/', { replace: true });
  };

  return (
    <NavContainer>
      <Logo>Design Metrics</Logo>
      <LogoutLink onClick={handleLogout}>
        Cerrar sesión
      </LogoutLink>
    </NavContainer>
  );
};

export default Navbar; 