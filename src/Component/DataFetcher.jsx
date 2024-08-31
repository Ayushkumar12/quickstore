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
        })
        .then(response => {
        console.log(response.data); // This will contain the array of book objects
        // Process the book data for your component
        })
        .catch(error => {
        console.error('Error fetching books:', error);
        });
        
        setData(response);
        console.log(data)
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {/* {data.map((book) => (
        <div>{book.name}</div>
      ))} */}
    </div>
  );
};

export default DataFetcher;