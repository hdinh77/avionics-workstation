import React from "react";
import './App.css';
import { BrowserRouter, Link } from "react-router-dom";
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      
      <Link to="/profile">Click to go to profile</Link>
        <p>
          <code>Hello world!</code>
          <Particles />
        </p>
    </div>
  
  );
}

export default App;
