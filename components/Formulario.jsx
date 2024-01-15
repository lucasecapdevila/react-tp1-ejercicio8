import React from 'react'
import Swal from 'sweetalert2'
import { Button, Form } from 'react-bootstrap'
import Input from './Input'

const Formulario = () => {
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


  return (
    <section>
      <Form className='bgForm d-flex flex-column p-2'>
        <div className="row">
          <Input 
            label="Nombre"
            placeholder="Juan"
            type="text"
            name="nombre"
            minlength="2"
            maxlength="35"
            regExp=""
          />
          <Input 
            label="Apellido"
            placeholder="Perez"
            type="text"
            name="apellido"
            minlength="2"
            maxlength="35"
            regExp=""
          />
          <Input 
            label="DNI"
            placeholder="99.999.999"
            type="number"
            name="dni"
            min="1"
            max="99999999"
            regExp=""
          />
          <Input 
            label="Email"
            placeholder="ejemplo@mail.com"
            type="email"
            name="email"
            minlength="3"
            maxlength="254"
            regExp=""
          />
        </div>

        <Button type='submit' variant='success' className='btnEnviar align-self-end'>Enviar</Button>

      </Form>
    </section>
  )
}

export default Formulario