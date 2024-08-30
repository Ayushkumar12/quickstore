import React, { useState } from "react";
import shop from '../asserts/shop.png';
import '../style/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../api/Firebaseapi';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,email,password);
      navigate("/", { replace: true });
      console.log('User logedin successfully!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="back">
      <div className='img'>
        <img src={shop} alt="shop" />
      </div>
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <Link to={'/forgot'}>Forgot password?</Link>
          <button type="submit">Submit</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}