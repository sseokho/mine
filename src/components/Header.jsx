import {Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { BsCart } from "react-icons/bs"; // 장바구니 아이콘
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" className="py-2">
        <Container className="d-flex justify-content-between">
          {/* 로고 */}
          <Navbar.Brand href="/">MyBrand</Navbar.Brand>

          {/* 검색창 */}
          <Form className="d-flex flex-grow-1 mx-2">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">🔍</Button>
          </Form>

          {/* 장바구니 아이콘 */}
          <Button variant="outline-light">
            <BsCart size={20} />
          </Button>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
