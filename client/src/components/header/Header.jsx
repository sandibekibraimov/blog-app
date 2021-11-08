import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node.js</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img
        src='https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        alt='header img'
        className='headerImg'
      />
    </div>
  );
};

export default Header;
