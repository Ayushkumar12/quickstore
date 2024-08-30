import React, { useState } from "react";
import shop from '../asserts/shop.png';
import '../style/signup.css';
import { Link } from 'react-router-dom';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../api/Firebaseapi';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth,name,email,phone,password);
      console.log('User created successfully!');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className='back'>
        <div className='img'>
            <img src={shop} alt="shop" />
        </div>
        <div className="signup">
            <h1>Sign Up</h1>
            <form>
                <input type="text" id="username" placeholder='Enter your name' value={name} onChange={(event) => setName(event.target.value)} required />
                <input type="email" id="email" placeholder='Enter your email address' value={email} onChange={(event) => setEmail(event.target.value)} required />
                <input type="tel" id="phone" placeholder='Enter your number' value={phone} onChange={(event) => setPhone(event.target.value)} required />
                <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <p>Already have account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  );
}
