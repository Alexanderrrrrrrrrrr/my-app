import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => (
  <div>
    <div>
      
      <img src="https://w.forfun.com/fetch/bb/bb6b75a214100d7494bcce8042d604fc.jpeg"></img>
    </div>
    <div className={s.descriptionBlock}>
      ava + description
    </div>
    
  </div>
);
export default ProfileInfo;