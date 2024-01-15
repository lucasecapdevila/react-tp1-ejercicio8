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
          <Input />
        </div>

        <Button variant='success' className='btnEnviar align-self-end' onClick={alertError}>Enviar</Button>

      </Form>
    </section>
  )
}

export default Formulario