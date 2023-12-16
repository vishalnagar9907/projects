import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic, make API call
  };

  return (
    <div className="auth_container">
      <h2>Login</h2>
      <form>
        <label>Email address</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <Link to="/signup" >Signup</Link>
      </form>
    </div>
  );
};

export default Login;