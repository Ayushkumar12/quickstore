import React from 'react';
import '../style/Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
        <form>
            <input type="email" name="email" id="" placeholder='Enter your email' />
            <button type="submit">Subscribe</button>
        </form>
        <section className='foot'>
            <div>
                <h2>Contact us</h2>
            </div>
            <div>
                <span>Phone</span>
                <span>Email</span>
                <span>Linkedin</span>
                <span>Github</span>
            </div>
        </section>
    </footer>
  );
}
