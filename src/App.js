import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from './components/Home';

import TableComp from './components/TableComp';
import Checkout from './components/Checkout.js';
import Header from './components/Header';
import Login from './components/Login';
function App() {
  return (

      <div className="app">
         
      <Routes>

        <Route path='/login' element={<div><Login></Login></div>} />
        <Route path='/' element={<div><Header /><Home /></div>} />
        <Route path='/checkout' element={<div><Header /><Checkout></Checkout></div>} />
        <Route path='/table' element={<TableComp />} />
      </Routes>
      </div>
    
  );
}

// config  need for fire base
// 



export default App;
