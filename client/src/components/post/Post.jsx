import React from 'react';
import './post.css';

const Post = () => {
  return (
    <div className='post'>
      <img
        src='https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        alt=''
        className='postImg'
      />
      <div className='postInfo'>
        <div className='postCategories'>
          <span className='postCategory'>Music</span>
          <span className='postCategory'>Life</span>
        </div>
        <span className='postTitle'>Lorem ipsum dolor sit.</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDescription'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a nostrum
        quia aut placeat amet nihil doloribus sapiente molestiae aspernatur.
        Natus, suscipit? Quaerat, amet quos? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Odit a nostrum quia aut placeat amet nihil
        doloribus sapiente molestiae aspernatur. Natus, suscipit? Quaerat, amet
        quos?
      </p>
    </div>
  );
};

export default Post;
