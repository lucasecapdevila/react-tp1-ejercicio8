import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Formulario = () => {
  return (
    <section>
      <Form className='bgForm px-2'>
        <div className="row">
          <Form.Group className="mb-3 col-md-6" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          
          <Form.Group className="mb-3 col-md-6" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group className="mb-3 col-md-6" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group className="mb-3 col-md-6" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
        </div>

      </Form>
    </section>
  )
}

export default Formulario