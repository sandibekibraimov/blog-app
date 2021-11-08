import React, { Fragment } from 'react';
import './App.css';
import TopBar from './components/topbar/TopBar';
import HomePage from './pages/home/HomePage';
import PostPage from './pages/post/PostPage';

const App = () => {
  return (
    <Fragment>
      <TopBar />
      {/* <HomePage /> */}
      <PostPage />
    </Fragment>
  );
};

export default App;
