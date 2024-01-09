import React, {useRef, useContext } from "react";
import { Form, Button , Container} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Store/authcontext";

const Login = () => {
    const authctx = useContext(AuthContext)
    const history = useHistory()
    const emailref = useRef()
    const passref = useRef()
    const submitHandler =async (event)=>{
        event.preventDefault()
        try{
            const enteredEmail = emailref.current.value;
            const enteredPassword = passref.current.value;
            const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_AUTHKEY}`,{
                method:'POST',
                body:JSON.stringify({
                    email:enteredEmail,
                    password:enteredPassword,
                    returnSecureToken:true
                }),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const data = await res.json()
            if(data.idToken){
                authctx.login(data.idToken)
                history.replace('/store')
            }else{
                throw new Error(data.error.message)
            }
        }catch(err){
            alert(err.message)
        }
        
    }
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
        style={{
          backgroundColor: "#87847b",
          margin: "2rem auto",
          borderRadius: "5px",
          width: "450px",
          padding: "2rem",
        }}
      >
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter Your email" ref={emailref} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={passref} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login