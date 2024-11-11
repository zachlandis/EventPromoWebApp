import React from 'react';
import './App.css';
import Post from './Posts/Post';
import PostList from './Posts/PostList';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <div>
          <PostList />
        </div>
      </header>
    </div>
  );
}

export default App;
