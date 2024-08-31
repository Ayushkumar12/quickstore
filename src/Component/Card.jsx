import React from 'react';
import '../style/card.css'
import book from '../book.json'
import Aos from 'aos';

export default function Card() {
  Aos.init({offset: 200,
    delay: 3,
    duration: 400,
    easing: 'ease-in-out',
    once: false
  });
  return (
    <div className='pro'>
        <div className="book" data-aos='zoom-in-up'>
            <img src="https://via.placeholder.com/150" alt="book" />
            <h3>Book Title</h3>
            <p>Author Name</p>
            <span>$9.99</span>
        </div>
    </div>
  );
}
