import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;