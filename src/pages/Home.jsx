import React from 'react';
import '../style/home.css';
import shop from '../asserts/shop.png'
import { Link } from 'react-router-dom';
import Card from '../Component/Card';
import Card2 from '../Component/Card2';

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="left">
          <h1>BookStore</h1>
          <p className='span1'>Explore a vast collection of books that cater to every interest and curiosity. Whether you're delving into the depths of history, unraveling the mysteries of science, or losing yourself in the world of fiction, BookStore has something for everyone.</p>
        </div>
        <img src={shop} alt="book" className='image' />
      </div>
      <section className="pop">
        <div className="bookhead">
          <h2>Trending Books</h2>
          <p><Link to='products'>Show more</Link></p>
        </div>
        <div className="books">
          <Card/>
        </div>
      </section>
      <section className='feedback'>
        <Card2/>
        <Card2/>
        <Card2/>
      </section>
    </>
  );
}
