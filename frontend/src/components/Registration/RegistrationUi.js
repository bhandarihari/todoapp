import React from 'react'
import { Form, Button ,FormText} from "react-bootstrap";
import {Container} from '@material-ui/core';

export default function RegistrationUi(props) {
    return (
        <Container maxWidth="sm" className="mt-5 bg-secondary text-white">
        <h3>{props.topic}</h3>
        <Form  onSubmit={props.onSubmit} >
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
            Registor
          </Button>
        </Form>
        </Container>
    );
}
