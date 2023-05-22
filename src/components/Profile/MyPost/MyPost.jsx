import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
const MyPost = () => {
  return <div>
    <div>
      My post
    </div>
    <div>
      New post
    </div>
    <div className={s.posts}>
      <Post message='Hi, how are you'/>
      <Post message="it is my first post"/>
    </div>
  </div>
 } ;
export default MyPost;
