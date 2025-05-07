import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import EraSplit from './components/EraSplit';
import Shop from './components/Shop';
import ShopSelect from './components/ShopSelect';
import Contact from './components/Contact';
import Home from './components/Home';


import './App.css';

function App() { 
  return (
    <Router>
      <Header />
      <div className='container'>
        <div className='main'>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/eras" element={<EraSplit />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:productId" element={<ShopSelect />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;