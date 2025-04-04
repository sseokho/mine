import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

import { Carousel, Navbar, Nav, Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { BsPhone, BsLaptop, BsWatch, BsCamera, BsShop, BsBag, BsSunglasses, BsHeart, BsHouse, BsFillHouseDoorFill, BsGift, BsCart, BsPerson, BsHeadphones, BsController, BsLightbulb, BsGrid } from "react-icons/bs"; // 장바구니 아이콘
import { Link } from "react-router-dom";





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

  
function Home() {
    let slideImageData = useSelector((state) => { return state.slideImageData })
    let productData = useSelector((state) => { return state.productData })

    


 
    return (
        <div className="content">
            <Carousel>
                {
                    slideImageData.map((a, i) => {
                        return (
                            <Carousel.Item key={i}>
                                <img src={a.url} />
                            </Carousel.Item>
                        )
                    })
                }

            </Carousel>

            <Container className="category-grid my-3">
                <Row>
                    {
                        categories.map((category, index) => (
                            <Col key={index} xs={3} className="text-center category-item" >
                                {category.icon}
                                <div className="category-label">{category.label}</div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>

            <div className="scroll-container">
                {
                    productData.map((src, index) => (
                        <Col key={index} xs={3} className="text-center category-item" >
                            <Link to={`/ProductDetail/${index}`}> 
                                <img className="scroll-item" src={ productData[index].url } />
                                <p><span>{ productData[index].cate }</span>{ productData[index].name }</p>
                                <p>{ productData[index].price }</p>
                            </Link>
                        </Col>
                        
                    ))
                }
            </div>
        </div>
    )
}


export default Home;

