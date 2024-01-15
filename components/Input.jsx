import React from 'react'
import { Form } from 'react-bootstrap'

const Input = () => {
  return (
    <Form.Group className="mb-3 col-md-6" controlId="nombre">
      <Form.Label>Nombre</Form.Label>
      <Form.Control type="text" placeholder="Juan" />
    </Form.Group>
  )
}

export default Input