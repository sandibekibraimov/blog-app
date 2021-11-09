import React from 'react';
import { useLocation } from 'react-router-dom';

import './singlePost.css';

const singlePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  console.log(path);

  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          src='https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          alt=''
          className='singlePostImg'
        />
        <h1 className='singlePostTitle'>
          Lorem, ipsum dolor.
          <div className='singlePostEdit'>
            <i className='singlePostIcon fas fa-edit'></i>
            <i className='singlePostIcon fas fa-trash-alt'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author: <b>Sandibek</b>
          </span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDescription'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
          minus nisi consequatur tenetur nulla expedita similique ex adipisci
          dignissimos veniam. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Ducimus minus nisi consequatur tenetur nulla
          expedita similique ex adipisci dignissimos veniam. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Ducimus minus nisi consequatur
          tenetur nulla expedita similique ex adipisci dignissimos veniam. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Ducimus minus nisi
          consequatur tenetur nulla expedita similique ex adipisci dignissimos
          veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Ducimus minus nisi consequatur tenetur nulla expedita similique ex
          adipisci dignissimos veniam. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Ducimus minus nisi consequatur tenetur nulla
          expedita similique ex adipisci dignissimos veniam. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Ducimus minus nisi consequatur
          tenetur nulla expedita similique ex adipisci dignissimos veniam. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Ducimus minus nisi
          consequatur tenetur nulla expedita similique ex adipisci dignissimos
          veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Ducimus minus nisi consequatur tenetur nulla expedita similique ex
          adipisci dignissimos veniam. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Ducimus minus nisi consequatur tenetur nulla
          expedita similique ex adipisci dignissimos veniam.
        </p>
      </div>
    </div>
  );
};

export default singlePost;
