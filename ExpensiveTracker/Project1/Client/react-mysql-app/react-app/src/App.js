// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data') // Replace with your server endpoint
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Sample React MySQL App</h1>
      <ul>
        {data.map((item) => (
          <li key={item.Name}>{item.ID}-{item.Name}</li> // Assuming your table has a 'name' column
        ))}
      </ul>
    </div>
  );
}

export default App;
