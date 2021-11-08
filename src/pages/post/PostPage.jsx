import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';
import './postpage.css';

const PostPage = () => {
  return (
    <div className='postpage'>
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default PostPage;
