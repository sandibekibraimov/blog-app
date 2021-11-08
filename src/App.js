import React, { Fragment } from 'react';
import './App.css';
import TopBar from './components/topbar/TopBar';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';

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
