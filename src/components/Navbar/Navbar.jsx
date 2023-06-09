import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return(<nav className={s.nav}>
  <div className={s.item}>
    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
  </div>
  <div className={`${s.item} ${s.active}`}>
    <NavLink to='/dialogs' activeClassName={s.active}>Massages </NavLink>
  </div>
  <div className={s.item}>
    <a>News</a>
    <div className={s.item}>
      <a>Music</a>
    </div>
    <div className={s.item}>
      <a>Settings</a>
    </div>
  </div>
</nav>)
  
};
export default Navbar