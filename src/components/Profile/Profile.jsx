import React from 'react';
import s from './Profile.module.css';
import MyPost from './MyPost/MyPost';
const Profile = () => (
  <div>
    <div>
      <img src="https://w.forfun.com/fetch/bb/bb6b75a214100d7494bcce8042d604fc.jpeg"></img>
    </div>
    <div>
      ava + description
    </div>
    <div>
      <MyPost />
    </div>
  </div>
);
export default Profile