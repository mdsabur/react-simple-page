import React, { useState } from "react";
import { Form, Button } from  "react-bootstrap";

import { AuthContext } from "../App";

import "./Login.css";
 
function Login () {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Login");
  }


    return (
      <div className="Login">
        <h2>Login</h2>
       
     <Form  onSubmit={handleSubmit}>
         <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email"   
                placeholder="Enter email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} />
            <Form.Text className="text-muted"> We'll never share your email with anyone else. 
            </Form.Text>  
        </Form.Group>
         <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
              <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          
          <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
        </Form>
    </div>
      
    );
  
}
 
export default Login;




