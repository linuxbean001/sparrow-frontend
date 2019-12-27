import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSignOut } from '../../hooks/api/auth';

const LogoutView = () => {
  const signOut = useSignOut();
  signOut();
  return <Redirect to="/login" />;
};

export default LogoutView;
