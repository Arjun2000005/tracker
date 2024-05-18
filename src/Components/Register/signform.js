import React from 'react';
import './signform.css';
import { FaUserCircle } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";

const SignForm = () => {
  return (
    <div className='wrapper'>
      <h1>Register</h1>
      <div className='input-box'>
        <input type="text" placeholder='Username' required />   
        <FaUserCircle className='icon' />
      </div>
      <div className='input-box'>
        <input type="text" placeholder='Email' required />
        <IoMdMail className='icon'/>
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
      <div className='register'>
        <p>Already have an account <Link to='/register' className='res'>Login</Link></p>
      </div>
    </div>
  );
}

export default SignForm;
