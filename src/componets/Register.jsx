import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Register()
{
    const[name, SetName] = useState("");
    const[email, SetEmail] = useState("");
    const[password, SetPassword] = useState("");

   function Signup()
   {
        let credentials = {name,email,password};
        console.log(credentials);

        // fetch("")
        alert('Form is submit');
    }

  return (
    <>
      <h3 className="mt-5">Register Page</h3>
      <Container>
        <Form>
        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2"> Name</Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=>SetName(e.target.value)} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2"> Email</Form.Label>
            <Col sm="10">
              <Form.Control type="email" placeholder="Password" value={email} onChange={(e)=>SetEmail(e.target.value)}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2"> Password</Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Email" value={password} onChange={(e)=>SetPassword(e.target.value)}/>
            </Col>
          </Form.Group>

          <Button className="btn btn-primary btn-md" onClick={Signup}>Submit</Button>
        </Form>
      </Container>
    </>
  );
}

export default Register;
