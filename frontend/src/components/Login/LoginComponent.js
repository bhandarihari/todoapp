import React,{useContext} from 'react'
import { Form, Button ,FormText} from "react-bootstrap";
import {Container} from '@material-ui/core';
import feachData from '../../Utils/FechData';
import toastify from '../../Utils/Toastify';
import UserContext from '../../Contex/UserContex';
import {Link, useHistory} from 'react-router-dom'

const LoginComponent = (props) => {

    const history = useHistory();
    const {setToken} = useContext(UserContext)
  

    const onSubmit = async (e) => {
      e.preventDefault();
      const data = props.data;
      feachData
        .POST("/registration/login", data)
        .then((res) => {
          toastify.showSuccess(`welcome`)
          let tkn = res.data.token
          localStorage.setItem("token",tkn)
          setToken(tkn)
          history.push('/')        
        })
        .catch((err) => {
          toastify.errorMsg(err)
        });
    };
  
      return (
          <Container maxWidth="sm" className="mt-5 bg-secondary text-white">
          <h3>{props.topic}</h3>
          <Form  onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="mt-3">Email address</Form.Label>
              <Form.Control onChange={props.onChange} name="email" className='sm' type="email" placeholder="Enter email" required/>
              <FormText className="text-danger h6" >{props.errors.email}</FormText>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={props.onChange} name="password" type="password" placeholder="Password" required/>
              <FormText className="text-danger h6" >{props.errors.password}</FormText>
            </Form.Group>
            <Button variant="primary" disabled={!props.isValidForm} type="submit" className='mb-3' >
              Login
            </Button>
          </Form>
          <Link to="/registor" className="text-white">Create Account</Link>
          </Container>
      );
  }
  
  export default LoginComponent;
  