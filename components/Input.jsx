import React from 'react'
import { Form } from 'react-bootstrap'

const Input = ({state, setState, label, placeholder, type, name, expresionRegular, minlength, maxlength, min, max}) => {
  const cambiarInput = (e) => {
    setState({...state, value: e.target.value})
  }

  const validacion = () => {
    if(expresionRegular.test(state.value)){
      const input = document.getElementById(`${name}`)
      input.style.border = '3px solid green'
    } else{
      const input = document.getElementById(`${name}`)
      input.style.border = '3px solid red'
    }
  }

  return (
    <Form.Group className="mb-3 col-md-6" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        value={state.value}
        onChange={cambiarInput}
        onKeyUp={validacion}
        onBlur={validacion}
        valido={state.validated}
        type={type}
        placeholder={placeholder}
        minLength={minlength}
        maxLength={maxlength}
        min={min}
        max={max}
        required
      />
    </Form.Group>
  )
}

export default Input