import React, { useContext } from "react";
import { Button, Navbar, Nav, Container, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartContext from "../Store/cartcontext";
import { AuthContext } from "../Store/authcontext";

const NavbarComponent = (props) => {
  const cartctx = useContext(CartContext);
  const authctx = useContext(AuthContext)
  const noOfCartItems = cartctx.items.reduce((curr, ele) => {
    return curr + ele.Amount;
  }, 0);

  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-2"
      style={{
        position: "fixed",
        width: "100%",
        zIndex: "10",
        top: "0",
        left: "0",
      }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ fontSize: "2.1rem", fontFamily: "Georgia" }}
        >
          SHOP-IN
        </Navbar.Brand>
        <Nav>
          <Nav.Link
            as={NavLink}
            exact
            to="/"
            style={{
              marginRight: "3rem",
              fontSize: "1.5rem",
              color: "#a2a6a3", // Default color for links
            }}
            activeStyle={{
              color: "white", // Change this to your preferred highlighted color
            }}
          >
            Home
          </Nav.Link>
          {authctx.isLoggedIn && <Nav.Link
            as={NavLink}
            to="/store"
            style={{
              marginRight: "3rem",
              fontSize: "1.5rem",
              color: "#a2a6a3", // Default color for links
            }}
            activeStyle={{
              color: 'white', // Change this to your preferred highlighted color
            }}
          >
            Store
          </Nav.Link>}
          
          <Nav.Link
            as={NavLink}
            to="/about"
            style={{
              marginRight: "3rem",
              fontSize: "1.5rem",
              color: "#a2a6a3", // Default color for links
            }}
            activeStyle={{
              color: "white", // Change this to your preferred highlighted color
            }}
          >
            About
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/contact"
            style={{
              marginRight: "3rem",
              fontSize: "1.5rem",
              color: "#a2a6a3", // Default color for links
            }}
            activeStyle={{
              color: "white", // Change this to your preferred highlighted color
            }}
          >
            Contact Us
          </Nav.Link>
          {!authctx.isLoggedIn && <Nav.Link
            as={NavLink}
            to="/login"
            style={{
              marginRight: "3rem",
              fontSize: "1.5rem",
              color: "#a2a6a3", // Default color for links
            }}
            activeStyle={{
              color: "white", // Change this to your preferred highlighted color
            }}
          >
            Login
          </Nav.Link>}
          
        </Nav>
        <Button
          variant="outline-light"
          className="m-1 flex-shrink-0 "
          style={{ width: "120px" }}
          onClick={props.onshowmodal}
        >
          Cart
          <Badge bg="primary" style={{ marginLeft: "1rem" }}>
            {noOfCartItems}
          </Badge>
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
