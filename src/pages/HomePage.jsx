import React, { Fragment } from 'react';
import './homepage.css';

import Header from '../components/header/Header';
import Posts from '../components/posts/Posts';
import Sidebar from '../components/sidebar/Sidebar';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className='home'>
        <Posts />
        <Sidebar />
      </div>
    </Fragment>
  );
};

export default Home;
