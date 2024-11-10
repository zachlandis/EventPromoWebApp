import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [post, setPost] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/posts/1`)
      .then(response => response.json())
      .then(data => setPost(data.postBody)) 
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>{post}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
