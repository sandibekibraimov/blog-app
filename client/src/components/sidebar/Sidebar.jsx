import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import './sidebar.css';

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await axios.get('/categories');
    setCategories(response.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>About me</span>
        <img
          src='https://images.pexels.com/photos/737586/pexels-photo-737586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          alt=''
          className='sidebarImg'
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>Categories</span>
        <ul className='sidebarList'>
          {categories &&
            categories.map((category) => (
              <NavLink to={`/?cat=${category.name}`}>
                <li key={category._id} className='sidebarListItem'>
                  {category.name}
                </li>
              </NavLink>
            ))}
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>Follow us</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fab fa-facebook-square'></i>
          <i className='sidebarIcon fab fa-linkedin'></i>
          <i className='sidebarIcon fab fa-instagram-square'></i>
          <i className='sidebarIcon fab fa-twitter-square'></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
