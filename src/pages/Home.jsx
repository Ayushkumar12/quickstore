import React from 'react';
import '../style/home.css';
import shop from '../asserts/shop.png'
import { Link } from 'react-router-dom';
import Card from '../Component/Card';
import Card2 from '../Component/Card2';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="left">
          <h1>BookStore</h1>
          <p>Explore a vast collection of books that cater to every interest and curiosity. Whether you're delving into the depths of history, unraveling the mysteries of science, or losing yourself in the world of fiction, BookStore has something for everyone.</p>
        </div>
        <div className="right">
          <img src={shop} alt="book" />
        </div>
      </section>
      <section className="pop">
        <div className="bookhead">
          <h2>Trending Books</h2>
          <p><Link to='products'>Show more</Link></p>
        </div>
        <div className="books">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </section>
      <section className='feedback'>
        <Card2/>
        <Card2/>
        <Card2/>
      </section>
    </main>
  );
}
