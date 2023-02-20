import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar';
import Hero from './hero';
import Arrow from './arrow';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navbar/>
    <Hero/>
    <Arrow/>
  </React.StrictMode>
);
