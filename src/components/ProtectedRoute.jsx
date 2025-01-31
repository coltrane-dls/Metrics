import React from 'react';
import { Navigate } from 'react-router-dom';
import { handleSession } from '../config/auth';

const ProtectedRoute = ({ children }) => {
  if (!handleSession.verify()) {
    handleSession.destroy();
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute; 