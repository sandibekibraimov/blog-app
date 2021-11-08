import React, { Fragment } from 'react';
import './App.css';
import TopBar from './components/topbar/TopBar';
import HomePage from './pages/home/HomePage';
import PostPage from './pages/post/PostPage';
import WritePage from './pages/write/WritePage';

const App = () => {
  return (
    <Fragment>
      <TopBar />
      {/* <HomePage /> */}
      {/* <PostPage /> */}
      <WritePage />
    </Fragment>
  );
};

export default App;
