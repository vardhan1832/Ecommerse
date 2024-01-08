import React from "react";
import { Form, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ContactUs = () => {
  const submitHandler = async (event) => {
    try{
        event.preventDefault();
        const obj = {
          name: event.target.formBasicName.value,
          email: event.target.formBasicEmail.value,
          number: event.target.formBasicNumber.value,
        };
        console.log(obj);
        await fetch('https://shop-in-640aa-default-rtdb.firebaseio.com/contact.json',{
            method:'POST',
            body: JSON.stringify(obj),
            headers:{
                'Content-Type':'application/json'
            }
        })
    }catch(err){
        console.log(err)
    }
   
  };
  return (
    <Container style={{backgroundColor:'#87847b',margin:'2rem auto',borderRadius:'5px', width:'450px',padding:'2rem'}}>
      <Form onSubmit={submitHandler} >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter Your Phone Number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
