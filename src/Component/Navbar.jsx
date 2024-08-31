import React from 'react';
import logo  from "../asserts/book.png";
import { Link } from 'react-router-dom';
import '../style/navbar.css';

export default function Navbar() {
  return (
    <nav>
        <ul className='top'>
          <li><img src={logo} /></li>
          <ul className='bottom'>
            <li><h3><Link to='/'>Home</Link></h3></li>
            <li><h3><Link to='/books'>Books</Link></h3></li>
            <li><h3><Link to='/about'>About</Link></h3></li>
            <li><h3><Link to='/contact'>Contact</Link></h3></li>
          </ul>
          <li>
            <span className='span'></span>
          </li>
        </ul>
    </nav>
  );
}
