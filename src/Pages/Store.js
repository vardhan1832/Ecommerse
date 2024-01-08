import React, { useContext } from "react";
import { Row, Card, Button, Col, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartContext from "../Store/cartcontext";

const productsArr = [
  {
    id: "1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = () => {
  const cartctx = useContext(CartContext);
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
      <Container
        style={{ margin: "3rem auto" }}
      >
        <Row xs={1} md={2} lg={2} className="g-4">
          {productsArr.map((item) => {
            return (
              <Col key={item.id}>
                <Card
                  style={{ width: "18rem" }}
                  className="m-3"
                >
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                    <Button variant="primary" style={{marginRight:'3px'}}>
                      <NavLink to={`/store/${item.id}`} style={{ textDecoration: 'none',color:'white' }}>
                        {" "}
                        Product details{" "}
                      </NavLink>{" "}
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => cartctx.addToCart({ ...item, Amount: 1 })}
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default Products;
