import Aos from 'aos';
import React from 'react';
import '../style/card2.css';
import 'aos/dist/aos.css';
// import book from '../book.json'

export default function Card2() {
  Aos.init({offset: 400,
    delay: 3,
    duration: 400,
    easing: 'ease-in-out',
    once: false
  });
  
  return (
    <div className='feed'>
        <div className="user" data-aos='fade-up'>
            <img src="https://via.placeholder.com/150" alt="book" />
            <h3>Username</h3>
            <p>Good</p>
        </div>
    </div>
  );
}
