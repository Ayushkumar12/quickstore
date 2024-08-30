import React from 'react';
import logo  from "../logo.png";

export default function Navbar() {
  return (
    <nav>
        <ul>
          <li><img src={logo}/></li>
          <li>
            
          </li>
        </ul>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      <ul className="social-media"></ul>
    </nav>
  );
}
