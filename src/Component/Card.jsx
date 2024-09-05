import React, { useState, useEffect } from 'react';
import '../style/card.css'

const Card = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=5')
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

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='products'>
      {data.map((shop) => (
        <div className="shop" data-aos='zoom-in-up' key={shop.id}>
            <img src={shop.image} alt="shop" />
            <div className="details"></div>
            <h3>{shop.title}</h3>
            <p>${shop.price}</p>
            <p> Rating : {shop.rating.rate}</p>
            <button><a href={shop.url}>Buy Now</a></button>
        </div>
      ))}
    </div>
  );
};

export default Card;