import React, { useState } from "react";
import shop from '../asserts/shop.png';
import '../style/signup.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Store data in Realtime Database using fetch
      const apiUrl = `https://quickshop-8aaad-default-rtdb.firebaseio.com/user.json`;
      const data = {
        first_name: fname,
        last_name: lname,
        phone: phone,
        email: email,
        password: password,
      };
      console.log('User created successfully!');
      fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((data) => console.log('Data stored successfully!'))
      .then(navigate("/", { replace: true }))
      .catch((error) => setError(error.message));
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
              <div className="input">
                <input type="text" id="firstname" placeholder='Enter your first name' value={fname} onChange={(event) => setFname(event.target.value)} required />
                <input type="text" id="lastname" placeholder='Enter your last name' value={lname} onChange={(event) => setLname(event.target.value)} required />
              </div>
              <div className="input2">
                <input type="email" id="email" placeholder='Enter your email address' value={email} onChange={(event) => setEmail(event.target.value)} required />
                <input type="tel" id="phone" placeholder='Enter your number' value={phone} onChange={(event) => setPhone(event.target.value)} required />
                <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                <button type="submit" onClick={handleSubmit}>Submit</button>
              </div>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <p>Already have account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  );
}