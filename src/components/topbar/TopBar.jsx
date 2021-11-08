import React from 'react';
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
          <li className='topListItem'>home</li>
          <li className='topListItem'>about</li>
          <li className='topListItem'>contact</li>
          <li className='topListItem'>write</li>
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
