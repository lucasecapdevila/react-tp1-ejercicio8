import { useState } from 'react'
import Swal from 'sweetalert2'
import { Button, Form } from 'react-bootstrap'
import Input from './Input'

const Formulario = () => {
  const [nombre, setNombre] = useState({value: '', validated: null})
  const [apellido, setApellido] = useState({value: '', validated: null})
  const [dni, setDni] = useState({value: '', validated: null})
  const [email, setEmail] = useState({value: '', validated: null})

  const expresiones = {
    nombreYApellido: /^[a-zA-ZÀ-ÿ\s]{2,35}$/,
    dni: /^[\d]{1,2}\.?[\d]{3}\.?[\d]{3}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }
  
  const alertExito = () => {
    Swal.fire({
      title: 'Datos enviados!',
      text: 'Los datos fueron enviados exitosamente.',
      icon: 'success',
      confirmButtonText: 'Continuar'
    })
  }
  
  const alertError = () => {
    Swal.fire({
      title: 'Datos incompletos!',
      text: 'Debes completar todos los datos para continuar.',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section>
      <Form className='bgForm d-flex flex-column p-2' onSubmit={handleSubmit}>
        <div className="row">
          <Input
            state={nombre}
            setState={setNombre}
            label="Nombre"
            placeholder="Juan"
            type="text"
            name="nombre"
            minlength="2"
            maxlength="35"
            expresionRegular={expresiones.nombreYApellido}
          />
          <Input
            state={apellido}
            setState={setApellido}
            label="Apellido"
            placeholder="Perez"
            type="text"
            name="apellido"
            minlength="2"
            maxlength="35"
            expresionRegular={expresiones.nombreYApellido}
          />
          <Input
            state={dni}
            setState={setDni}
            label="DNI"
            placeholder="0.000.001 - 99.999.999"
            type="number"
            name="dni"
            min="1"
            max="99999999"
            expresionRegular={expresiones.dni}
          />
          <Input
            state={email}
            setState={setEmail}
            label="Email"
            placeholder="ejemplo@mail.com"
            type="email"
            name="email"
            minlength="3"
            maxlength="254"
            expresionRegular={expresiones.correo}
          />
        </div>

        <Button type='submit' variant='success' className='btnEnviar align-self-end'>Enviar</Button>

      </Form>
    </section>
  )
}

export default Formulario