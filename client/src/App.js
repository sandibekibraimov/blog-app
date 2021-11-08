import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import TopBar from './components/topbar/TopBar';
import HomePage from './pages/home/HomePage';
import PostPage from './pages/post/PostPage';
import SettingsPage from './pages/settings/SettingsPage';
import WritePage from './pages/write/WritePage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';

const App = () => {
  const user = false;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/post/:id' element={<PostPage />} />

        {user ? (
          <Route path='/settings' element={<SettingsPage />} />
        ) : (
          <Route path='/register' element={<RegisterPage />} />
        )}

        {user ? (
          <Route path='/write' element={<WritePage />} />
        ) : (
          <Route path='/register' element={<RegisterPage />} />
        )}

        {user ? (
          <Route path='/' element={<HomePage />} />
        ) : (
          <Route path='/login' element={<LoginPage />} />
        )}

        {user ? (
          <Route path='/' element={<HomePage />} />
        ) : (
          <Route path='/register' element={<RegisterPage />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
