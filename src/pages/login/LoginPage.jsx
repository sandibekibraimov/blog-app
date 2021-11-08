import React from 'react';
import { NavLink } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <form className='loginForm'>
        <label>Email:</label>
        <input type='text' className='loginInput' />

        <label>Password:</label>
        <input type='password' className='loginInput' />

        <button className='loginBtn'>Login</button>
      </form>
      <button className='registerBtn'>
        <NavLink to='/register'>Register</NavLink>
      </button>
    </div>
  );
};

export default LoginPage;
