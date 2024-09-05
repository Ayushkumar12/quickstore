import React, { useState, useEffect } from 'react';
import '../style/book.css'

const Card = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
          .then(res => res.json())

        if (response) {
          setData(response);
        } else {
          setError('Error: No data returned');
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='allpro'>
      {data.map((book) => (
        <div className="book2" data-aos='zoom-in-up' key={book.id}>
            <img src={book.image} alt="book" />
            <h3>{book.title}</h3>
            <p>{book.price}</p>
            {/* <button><a href={book.url}>Buy Now</a></button> */}
        </div>
      ))}
    </div>
  );
};

export default Card;