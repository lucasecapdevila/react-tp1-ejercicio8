import React from 'react'
import { Form } from 'react-bootstrap'

const Input = ({label, placeholder, type, name, regExp, minlength, maxlength, min, max}) => {
  return (
    <Form.Group className="mb-3 col-md-6" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control 
        type={type}
        placeholder={placeholder}
        minLength={minlength}
        maxLength={maxlength}
        min={min}
        max={max}
        // pattern={regExp}
        required
      />
    </Form.Group>
  )
}

export default Input