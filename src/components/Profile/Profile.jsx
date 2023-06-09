import React from 'react';
import s from './Profile.module.css';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => (
  <div>
    <div>
      <ProfileInfo />

      <MyPost
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch} />
    </div>
  </div>
);
export default Profile