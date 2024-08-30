import React from 'react';
import '../style/card.css'
import book from '../book.json'

export default function Card() {
  return (
    <div>
        <div className="book">
            
            <img src="https://via.placeholder.com/150" alt="book" />
            <h3>Book Title</h3>
            <p>Author Name</p>
            <span>$9.99</span>
        </div>
    </div>
  );
}
