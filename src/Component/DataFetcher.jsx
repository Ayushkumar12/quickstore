import axios from 'axios';
import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.itbook.store/1.0/search/mongodb', {
          headers: {
            Accept: 'application/json'
          }
        });

        if (response.status === 200) {
          setData(response.data.books);
        } else {
          setError(`Error ${response.status}: ${response.statusText}`);
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
      <div className='feed'>
      {data.map((book) => (
        <div className="user" data-aos='fade-up' key={book.isbn13}>
            <img src={book.image} alt="book" />
            <h3>{book.title}</h3>
            <p>Good</p>
        </div>
      ))}
    </div>
  );
};

export default DataFetcher;