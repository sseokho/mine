import { useState, useEffect } from 'react'
import {useSelector} from 'react-redux';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import { Carousel, Navbar, Nav, Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { BsPhone, BsLaptop, BsWatch, BsCamera, BsShop, BsBag, BsSunglasses, BsHeart, BsHouse, BsFillHouseDoorFill, BsGift, BsCart, BsPerson, BsHeadphones, BsController, BsLightbulb, BsGrid } from "react-icons/bs"; // 장바구니 아이콘
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'

import Header from "./components/Header";
import Home from "./pages/Home";
import ProducDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";



function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);
  
  return (
    <>
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductDetail/:id" element={<ProducDetail />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}


export default App
