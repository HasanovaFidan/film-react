import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Data({ search, setWishListItem }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?s=${search}&apikey=ed5e4f30`).then((res) => {
      if (res.data.Response === 'True') {
        setData(res.data.Search);
        setLoading(false);
        setError('');
      } else {
        setData([]);
        setLoading(false);
        setError('Data not found');
      }
    });
  }, [search]);

  const handleWishlist = (item) => {
    
    setWishListItem(item);
  };

  return (
    <div>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="all">
          {data.length > 0 ? (
            data.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.Poster} alt="" />
                <h3>{item.Title}</h3>
                <p>{item.Year}</p>
                <button onClick={() => handleWishlist(item)}>Add</button>
              </div>
            ))
          ) : (
            <p>{error || 'Data not found'}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Data;

