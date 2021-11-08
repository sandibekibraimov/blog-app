import React from 'react';
import { NavLink } from 'react-router-dom';

import './register.css';

const RegisterPage = () => {
  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <form className='registerForm'>
        <label>Username:</label>
        <input type='text' className='registerInput' />

        <label>Email:</label>
        <input type='text' className='registerInput' />

        <label>Password:</label>
        <input type='password' className='registerInput' />
        <button className='registerPageBtn'>Register</button>
      </form>
      <button className='loginRegisterBtn'>
        <NavLink to='/login'>Login</NavLink>
      </button>
    </div>
  );
};

export default RegisterPage;
