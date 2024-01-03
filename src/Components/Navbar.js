import React from "react"
import { Button, Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () =>{
    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="p-2">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize: '2.1rem'}}>
            SHOP-IN
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/" style={{ marginRight: '3rem', fontSize: '1.5rem' }}>Home</Nav.Link>
            <Nav.Link style={{ marginRight: '3rem', fontSize: '1.5rem' }}>Store</Nav.Link>
            <Nav.Link style={{ marginRight: '3rem', fontSize: '1.5rem' }}>About</Nav.Link>
          </Nav>
          <Button
            variant="outline-light"
            className="m-1 flex-shrink-0 "
            style={{ width: "100px" }}
          >
            Cart
          </Button>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent