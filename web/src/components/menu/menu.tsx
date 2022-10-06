import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'

const Menu = () => {
  return (
    <div className='menu'>
      <Link className='menu-item' to="/">Welcome</Link>
      <Link className='menu-item' to="/firstscript">First script</Link>
      <Link className='menu-item' to="/secondscript">Second script</Link>
      <Link className='menu-item' to="/thirdscript">Third script</Link>
    </div>
  );
};

export default Menu;