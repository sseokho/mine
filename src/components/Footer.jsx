
import { Navbar, Nav } from 'react-bootstrap';
import {  BsHeart, BsHouse, BsPerson,  BsGrid } from "react-icons/bs"; // 장바구니 아이콘
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer>
      <Navbar
        bg="dark"
        variant="dark"
        fixed="bottom"
        className="bottom-navbar py-2"
      >
        <Nav className="w-100 d-flex justify-content-around">
          <Nav.Link href="#home" className="text-center text-light">
            <BsHouse size={20} />
            <div style={{ fontSize: "12px" }}>홈</div>
          </Nav.Link>
          <Nav.Link href="#category" className="text-center text-light">
            <BsGrid size={20} />
            <div style={{ fontSize: "12px" }}>카테고리</div>
          </Nav.Link>
          <Nav.Link href="#wishlist" className="text-center text-light">
            <BsHeart size={20} />
            <div style={{ fontSize: "12px" }}>찜</div>
          </Nav.Link>
          <Nav.Link href="#mypage" className="text-center text-light">
            <BsPerson size={20} />
            <div style={{ fontSize: "12px" }}>마이페이지</div>
          </Nav.Link>
        </Nav>
      </Navbar>
    </footer>
  );
}

export default Footer;
