import React, {useContext} from "react";
import { Button, Navbar, Nav, Container , Badge} from "react-bootstrap";
import CartContext from "../Store/cartcontext";

const NavbarComponent = (props) => {
  const cartctx = useContext(CartContext)
  const noOfCartItems = cartctx.items.reduce((curr,ele)=>{
    return curr + ele.Amount
  },0)
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="p-2" style={{position:'fixed',width: '100%',zIndex:'10',top:'0',left:'0'}}>
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ fontSize: "2.1rem", fontFamily: "Georgia" }}
        >
          SHOP-IN
        </Navbar.Brand>
        <Nav>
          <Nav.Link
            href="/"
            style={{ marginRight: "3rem", fontSize: "1.5rem" }}
          >
            Home
          </Nav.Link>
          <Nav.Link href="/store" style={{ marginRight: "3rem", fontSize: "1.5rem" }}>
            Store
          </Nav.Link>
          <Nav.Link href="/about" style={{ marginRight: "3rem", fontSize: "1.5rem" }}>
            About
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-light"
          className="m-1 flex-shrink-0 "
          style={{ width: "120px" }}
          onClick={props.onshowmodal}
        >
          Cart
          <Badge bg="primary" style={{marginLeft: '1rem'}}>{noOfCartItems}</Badge>
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
