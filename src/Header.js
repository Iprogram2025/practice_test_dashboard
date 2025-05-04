import React from 'react';
import './App.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">
      <img src="/logo.png" alt="Logo" />
      </div>
      <div className="auth-buttons">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
}

export default Header;
