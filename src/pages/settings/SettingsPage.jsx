import React from 'react';
import './settingspage.css';
import Sidebar from '../../components/sidebar/Sidebar';

const SettingsPage = () => {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Accoung</span>
        </div>
        <form className='settingsForm'>
          <label>Profile picture</label>
          <div className='settingsProfilePicture'>
            <img
              src='https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt=''
              className='settingsImg'
            />
            <label htmlFor='fileInput'>
              <i className='settingsProfilePicIcon fas fa-user'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} />
          </div>

          <label>User name</label>
          <input type='text' placeholder='Username' />

          <label>Email</label>
          <input type='email' placeholder='Email' />

          <label>Password</label>
          <input type='password' />

          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default SettingsPage;
