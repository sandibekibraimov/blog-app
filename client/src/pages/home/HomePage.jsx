import React, { Fragment, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import './homepage.css';

import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  const fetchPosts = async () => {
    const response = await axios.get('/posts' + search);
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <Fragment>
      <Header />
      <div className='home'>
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </Fragment>
  );
};

export default Home;
