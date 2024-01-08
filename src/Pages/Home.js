import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div
        style={{
          padding: "1.45rem",
          margin: "5rem 0rem 0rem 0rem",
          backgroundColor: "#8d948e",
        }}
      >
        <p
          style={{
            fontSize: "3.4rem",
            textAlign: "center",
            fontFamily: "Georgia",
          }}
        >
          The Classics{" "}
        </p>
      </div>
      <Container style={{ marginTop: "6rem" }}>
        <Carousel
          data-bs-theme="dark"
          className="my-carousel"
          style={{ color: "white" }}
          prevIcon={
            <span style={{ color: "white", fontSize: "35px" }}>prev</span>
          }
          nextIcon={
            <span style={{ color: "white", fontSize: "35px" }}>next</span>
          }
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D"
              alt="shop"
            />
            <Carousel.Caption
              style={{
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontWeight: "bold",
                fontSize: "25px",
              }}
            >
              <h5>Pick your product</h5>
              <p>Shop until you get your fit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/1385913032/photo/full-length-portrait-of-young-caucasian-man-pushing-an-empty-shopping-cart-or-shopping.webp?b=1&s=170667a&w=0&k=20&c=f5iNmQhS2OrxpIRFxKIsyuvVPQtg7QSCHRZIpgxcLj4="
              alt="cart"
            />
            <Carousel.Caption
              style={{
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              <h5>Add to Cart</h5>
              <p>Add your picks to Cart</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnV5aW5nJTIwd2l0aCUyMGNhcmR8ZW58MHx8MHx8fDA%3D"
              alt="billing"
            />
            <Carousel.Caption
              style={{
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              <h5>Order your products</h5>
              <p>Order your products in cart to get them delivered.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};
export default Home;
