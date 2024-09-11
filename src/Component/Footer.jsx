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
                <span>+91 7838945961</span>
                <span>Ayushkumar112003@gmail.com</span>
                <span>Ayush Kumar</span>
                <span>Ayushkumar12</span>
            </div>
        </section>
    </footer>
  );
}
