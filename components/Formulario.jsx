import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Formulario = () => {
  return (
    <section>
      <Form className='bgForm d-flex flex-column p-2'>
        <div className="row">
          <Form.Group className="mb-3 col-md-6" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Juan" />
          </Form.Group>
          
          <Form.Group className="mb-3 col-md-6" controlId="apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Perez" />
          </Form.Group>

          <Form.Group className="mb-3 col-md-6" controlId="dni">
            <Form.Label>DNI</Form.Label>
            <Form.Control type="number" placeholder="99.999.999" />
          </Form.Group>

          <Form.Group className="mb-3 col-md-6" controlId="correo">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="ejemplo@mail.com" />
          </Form.Group>
        </div>

        <Button variant='success' className='btnEnviar align-self-end'>Enviar</Button>

      </Form>
    </section>
  )
}

export default Formulario