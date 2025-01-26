// src/App.js
import React from 'react';
import './App.css';
import MenuBar from './Menubar';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <div style={{ marginTop: '60px' }}>
        <h1>Welcome to the Basic React App</h1>
        <p>This is a simple app with a top menu bar.</p>
      </div>
    </div>
  );
}

export default App;
