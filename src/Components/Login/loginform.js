import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './loginform.css';

function Login() { // Changed component name to LoginForm
  return (
    <div className='wrapper'>
      <h1>Login </h1>
      <div className='input-box'>
        <input type="text" placeholder='Email' required />
        <FaUserCircle className='icon' />
      </div>
      <div className='input-box'>
        <input type="password" placeholder='Password' required />
        <FaKey className='icon' />
      </div>
      <div className='remember'>
        <label>
          <input type='checkbox' /> Remember me
        </label>
        <Link to='/forgot-password' className='for'>Forgot password</Link>
      </div>
      <button type='submit'>Login</button>
      <div className='Login'>
        <p>Don't Have an account? <Link to='/register' className='res'>Register</Link></p>
      </div>
    </div>
  );
}

export default Login; // Corrected export name to LoginForm
