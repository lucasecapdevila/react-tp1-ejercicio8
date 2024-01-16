import { Form } from 'react-bootstrap'

const Input = ({state, setState, label, placeholder, type, name, expresionRegular, minlength, maxlength, min, max}) => {
  const cambiarInput = (e) => {
    setState({...state, value: e.target.value})
  }

  const validacion = () => {
    if(expresionRegular.test(state.value)){
      return true
    } else{
      return false
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
        isValid={validacion()}
        required
      />
    </Form.Group>
  )
}

export default Input