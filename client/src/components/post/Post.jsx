import React from 'react';
import { NavLink } from 'react-router-dom';

import './post.css';

const Post = ({ post }) => {
  console.log(post);
  const { username, title, photo, description, categories, createdAt, _id } =
    post;
  console.log(categories);

  return (
    <div className='post'>
      {photo && <img src={photo} alt='' className='postImg' />}
      <div className='postInfo'>
        <div className='postCategories'>
          {categories.map((category) => (
            <span className='postCategory' key={category._id}>
              {category}
            </span>
          ))}
        </div>

        <span className='postTitle'>
          <NavLink to={`/post/${_id}`}>{title}</NavLink>
        </span>
        <hr />
        <span className='postDate'>{new Date(createdAt).toDateString()}</span>
      </div>
      <p className='postDescription'>{description}</p>
    </div>
  );
};

export default Post;
