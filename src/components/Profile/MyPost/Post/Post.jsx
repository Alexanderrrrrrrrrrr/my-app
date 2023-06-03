import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
  return (
      <div className={s.item}>
        <img className={s.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUDUoUZM6IF7v7JMQbnrpkNC9vEnpAeyKp_A&usqp=CAU'></img>
      { props.message }
        <div>
        like{ props.likesCount }
        </div>
      </div>
  )
 } ;
export default Post;
