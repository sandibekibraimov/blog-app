import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import './singlePost.css';

const SinglePost = () => {
  let params = useParams();
  const [post, setPost] = useState();
  const { id } = params;

  const getPost = useCallback(async () => {
    const response = await axios.get(`/posts/${id}`);
    setPost(response.data);
  }, [id]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div className='singlePost'>
      {post && (
        <div className='singlePostWrapper'>
          <img src={post.photo} alt='' className='singlePostImg' />
          <h1 className='singlePostTitle'>
            {post.title}
            <div className='singlePostEdit'>
              <i className='singlePostIcon fas fa-edit'></i>
              <i className='singlePostIcon fas fa-trash-alt'></i>
            </div>
          </h1>
          <div className='singlePostInfo'>
            <span className='singlePostAuthor'>
              Author:{' '}
              <NavLink to={`/?user=${post.username}`}>
                <b>{post.username}</b>
              </NavLink>
            </span>
            <span className='singlePostDate'>
              {new Date(post.createdAt).toDateString()}
            </span>
          </div>
          <p className='singlePostDescription'>{post.description}</p>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
