import React, { useContext } from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";
import CartContext from "../../Store/cartcontext";

// const cartElements = [
//   {
//     title: "Colors",

//     price: 100,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

//     Amount: 2,
//   },

//   {
//     title: "Black and white Colors",

//     price: 50,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

//     Amount: 3,
//   },

//   {
//     title: "Yellow and Black Colors",

//     price: 70,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

//     Amount: 1,
//   },
// ];

const Cart = (props) => {
  const cartctx = useContext(CartContext);
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">CART</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row
            xl={3}
            md={3}
            lg={3}
            className="g-4 justify-content-between"
            style={{ marginBottom: "2rem" }}
          >
            <Col lg={6} md="6" xl="6">
              Product
            </Col>
            <Col lg={2} md="2" xl="2">
              Price
            </Col>
            <Col lg={4} md="4" xl="4">
              Quantity
            </Col>
          </Row>
          {cartctx.items.map((item, index) => {
            return (
              <Row key={index} xl={3} md={3} lg={3} className="mb-2">
                <Col lg="6" md="6" xl="6">
                  <img
                    src={item.imageUrl}
                    className="mr-3"
                    style={{
                      height: "4rem",
                      width: "4rem",
                      marginRight: "1rem",
                    }}
                    alt="pic"
                  />
                  <span>{item.title}</span>
                </Col>
                <Col lg="2" md="2" xl="2" style={{display:'flex',alignItems:'center'}}>
                  {item.price}
                </Col>
                <Col lg="4" md="4" xl="4">
                  {item.Amount}

                  <Button
                    style={{ padding: "1px 4px", margin: "3px", marginLeft:'0.3em' }}
                    variant="outline-dark"
                    onClick={() => cartctx.removeFromCart(item.id)}
                  >
                    -
                  </Button>
                  <Button
                    variant="outline-dark"
                    style={{ padding: "1px 3px", margin: "3px" }}
                    onClick={() => cartctx.addToCart({ ...item, Amount: 1 })}
                  >
                    +
                  </Button>

                  <Button variant="primary" className="m-3" onClick={()=>cartctx.removeProduct(item.id)}>
                    Remove
                  </Button>
                </Col>
              </Row>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <p>Total Price: {cartctx.totalPrice}</p>
          <Button>Order</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
