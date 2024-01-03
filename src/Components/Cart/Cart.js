import React from "react";
import { Modal, Row, Col, Button} from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const Cart = (props) => {
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
            <Row xl={3} md={3} lg={3} className="g-4 justify-content-between" style={{marginBottom: '2rem'}}>
              <Col lg={6} md='6' xl='6'>Product</Col>
              <Col lg={3} md='3' xl='3'>Price</Col>
              <Col lg={3} md='3' xl='3'>Quantity</Col>
            </Row>
            {cartElements.map((item, index) => {
              return (
                <Row
                  key={index}
                  xl={3}
                  md={3}
                  lg={3}
                  className="mb-2"
                >
                  <Col lg="6" md='6' xl='6'>
                    <img src={item.imageUrl} className="mr-3" style={{height: '4rem',width: '4rem' , marginRight: '1rem'}} alt="pic" />
                    <span>{item.title}</span>
                  </Col>
                  <Col lg="3" md='3' xl='3'>{item.price}</Col>
                  <Col lg="3" md='3' xl='3'>{item.quantity}
                  <Button variant="primary" className="m-3">Remove</Button></Col>
                </Row>
              );
            })}
            
          </Modal.Body>
          <Modal.Footer>
          <p>Total Price: 33.4</p>
            <Button>Order</Button>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  export default Cart;