import React from 'react';
import '../style/contact.css'

export default function Contact() {
  return (
    <div className='form'>
      <h1>Contact Us</h1>
      <form>
        <div className="jion">
            <input type='text' name='name' placeholder='Enter your first name' required />
            <input type='telephone' name='phone' placeholder='Enter your Phone' required />
        </div>
        <input type='email' name='email' placeholder='Enter your email' required />
        <textarea type='text' name='message' id='message'  placeholder='Enter your message' required/>
        <button type='submit' >submit</button>
      </form>
    </div>
  );
}
