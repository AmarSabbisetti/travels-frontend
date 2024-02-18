// LogoutButton.js
import React from 'react';
import {  useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');

    localStorage.removeItem('isLoggedIn');
    

    // Clear any other user-specific data
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;