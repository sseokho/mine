import { useState, useEffect } from 'react'
import {useSelector} from 'react-redux';

import { Carousel, Navbar, Nav, Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { BsPhone, BsLaptop, BsWatch, BsCamera, BsShop, BsBag, BsSunglasses, BsHeart, BsHouse, BsFillHouseDoorFill, BsGift, BsCart, BsPerson, BsHeadphones, BsController, BsLightbulb, BsGrid } from "react-icons/bs"; // 장바구니 아이콘
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'


import Header from "./components/Header";
import Footer from "./components/Footer";

const categories = [
  { icon: <BsPhone size={40} />, label: "스마트폰" },
  { icon: <BsLaptop size={40} />, label: "노트북" },
  { icon: <BsWatch size={40} />, label: "시계" },
  { icon: <BsCamera size={40} />, label: "카메라" },
  { icon: <BsSunglasses size={40} />, label: "선글라스" },
  { icon: <BsHeadphones size={40} />, label: "음향기기" },
  { icon: <BsController size={40} />, label: "게임" },
  { icon: <BsLightbulb size={40} />, label: "조명" },
];
const images = [
  "https://picsum.photos/800/400?random=1",
  "https://picsum.photos/800/400?random=1",
  "https://picsum.photos/800/400?random=1",
  "https://picsum.photos/800/400?random=1",
  "https://picsum.photos/800/400?random=1",
  "https://picsum.photos/800/400?random=1",
];

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10);
  }, [])
  return (
    <>
      <div>
        {loading ? <Loading /> : <Main />}
      </div>
    </>
  )
}

function Main() {
  let slideImageData = useSelector((state) => { return state.slideImageData })
  return (
    <>
      <Header/>

      <div className="content">
        <Carousel>
          {
            slideImageData.map((a,i) => {
              return(
                <Carousel.Item>
                  <img src={a.url}/>
                </Carousel.Item>
              )
            })
          }
         
        </Carousel>
        
        <Container className="category-grid my-3">
          <Row>
            {
              categories.map((category, index) => (
                <Col key={index} xs={3} className="text-center category-item">
                  {category.icon}
                  <div className="category-label">{category.label}</div>
                </Col>
              ))
            }
          </Row>
        </Container>

        <div className="scroll-container">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index}`} className="scroll-item" />
          ))}
        </div>
      </div>


      <Footer/>
    </>
  )
}
function Loading() {
  return (
    <h1>로딩중</h1>
  )
}
export default App
