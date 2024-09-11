import Aos from 'aos';
import React, { useState, useEffect } from 'react';
import '../style/product.css'

const Shop = () => {
  Aos.init({
    offset:200,
    easing: 'ease-in-out',
    once: false,
  });
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

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='allpro'>
      {data.map((shop) => (
        <div className="shop" data-aos='zoom-in-up' key={shop.id}>
            <img src={shop.image} alt="shop" />
            <div className="col">
            <h3>{shop.title}</h3>
            <p>{shop.price}</p>
            <button><a href={shop.url}>Buy Now</a></button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;