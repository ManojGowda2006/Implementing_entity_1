// src/App.jsx

import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Addbook from './Addbook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/addbook" element={<Addbook/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
