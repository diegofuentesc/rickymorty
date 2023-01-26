import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'




const Buscador = ({setValorBusqueda}) => {

 const [valorCaja, setValorCaja] = useState('');

  return (
    <Navbar className="header" expand="lg">
      <Container fluid>
        <Navbar.Brand className='titulo'>Rick y Morty</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex input">
            <Form.Control 
             
             type="search"
             placeholder="Personaje"
             className="me-2"
             aria-label="Search"

             onChange={(e) => setValorCaja(e.target.value)}
            />
          </Form>
          <Button className="boton" onClick={() => setValorBusqueda(valorCaja)} >Buscar</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Buscador