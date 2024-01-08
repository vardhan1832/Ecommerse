import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Row, Col, Container } from "react-bootstrap";
import CartContext from "../Store/cartcontext";
import { Figure } from "react-bootstrap";
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

const ProductDetails = () => {
  const cartctx = useContext(CartContext);
  const params = useParams();
  const product = productsArr.find((ele) => {
    return ele.id === params.productId;
  });
  return (
    <>
      <Row lg={2} xs={1} md={2}>
        <Col>
          <Figure style={{ margin: "6rem 4rem" ,border:'1px solid black'}}>
            <Figure.Image
              width={500}
              height={500}
              alt="image"
              src={product.imageUrl}
            />
          </Figure>
        </Col>
        <Col>
          <Container style={{ marginTop: "7rem" }}>
            <h1>{product.title}</h1>
            <p style={{ margin: "2rem auto" }} >This is a very great product.</p>
            <h3>Price: ${product.price}</h3>
            <Button
              variant="primary"
              onClick={() => cartctx.addToCart({ ...product, Amount: 1 })}
            >
              Add to Cart
            </Button>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;
