import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './register.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  let navigate = useNavigate();

  const submitHandle = async (e) => {
    e.preventDefault();
    setError(false);

    const newUser = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post('/auth/register', newUser);
      navigate('/login');
    } catch (error) {
      console.log(error);
      setError(true);
    }

    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <form className='registerForm' onSubmit={submitHandle}>
        <label>Username:</label>
        <input
          type='text'
          className='registerInput'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email:</label>
        <input
          type='text'
          className='registerInput'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type='password'
          className='registerInput'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='registerPageBtn' type='submit'>
          Register
        </button>
        {error && <span>Something went wrong! please try again</span>}
      </form>
      <button className='loginRegisterBtn'>
        <NavLink to='/login'>Login</NavLink>
      </button>
    </div>
  );
};

export default RegisterPage;
