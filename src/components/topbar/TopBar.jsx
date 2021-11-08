import React from 'react';
import { NavLink } from 'react-router-dom';

import './topbar.css';

const TopBar = () => {
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-linkedin'></i>
        <i className='topIcon fab fa-instagram-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <NavLink to='/'>home</NavLink>
          </li>
          <li className='topListItem'>
            <NavLink to='/about'>about</NavLink>
          </li>
          <li className='topListItem'>
            <NavLink to='/contact'>contact</NavLink>
          </li>
          <li className='topListItem'>
            <NavLink to='/write'>write</NavLink>
          </li>
          <li className='topListItem'>log out</li>
        </ul>
      </div>
      <div className='topRight'>
        <img
          className='topImg'
          src='https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          alt='logo'
        />
        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  );
};

export default TopBar;
