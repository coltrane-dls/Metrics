import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 64px; // Altura del Navbar
  bottom: 0;
  width: 250px;
  background: var(--background-box);
  box-shadow: var(--shadow-default);
  padding: var(--s-unit-2);
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: var(--s-unit-2);
  text-decoration: none;
  color: var(--text);
  border-radius: var(--rounded-sm);
  margin-bottom: var(--s-unit);
  
  &:hover {
    background: var(--background-soft);
  }
  
  &.active {
    background: var(--primary);
    color: var(--bancoppel);
  }
`;

const menuItems = [
  { path: '/dashboard', label: 'Vista General' },
  { path: '/dashboard/teams', label: 'Equipos' },
  { path: '/dashboard/files', label: 'Archivos' },
  { path: '/dashboard/activity', label: 'Actividad' },
  { path: '/dashboard/reports', label: 'Reportes' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <SidebarContainer>
      {menuItems.map((item) => (
        <MenuItem
          key={item.path}
          to={item.path}
          className={location.pathname === item.path ? 'active' : ''}
        >
          {item.label}
        </MenuItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar; 