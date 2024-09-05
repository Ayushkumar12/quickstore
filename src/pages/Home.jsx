import React from 'react';
import '../style/home.css';
import shop from '../asserts/shop.gif'
import { Link } from 'react-router-dom';
import Card from '../Component/Card';
import Card2 from '../Component/Card2';

export default function Home() {
  return (
    <main>
      <div className="hero">
        <div className="left">
          <h1>QuickStore</h1>
          <p className='span1'>Welcome to QuickStore, your one-stop online shopping destination. Browse our vast collection of products, enjoy seamless checkout, and experience the ultimate in online retail convenience</p>
        </div>
        <img src={shop} alt="shop" className='image' />
      </div>
      <section className="pop">
        <div className="shophead">
          <h2>New Products</h2>
          <p><Link to='/products'>Show more</Link></p>
        </div>
        <div>
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
