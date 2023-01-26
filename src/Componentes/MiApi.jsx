import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import tumba from '../assets/img/tumba.png';
import corazon from '../assets/img/corazon.png';
import desconocido from '../assets/img/desconocido.png';


const MiApi = ({ valorBusqueda }) => {

  const [personajes, setPersonajes] = useState([]);
  personajes.sort((a, b) => a.name.trim().localeCompare(b.name.trim()));


  useEffect(() => {

    getPersonajes();


  }, [valorBusqueda]);


  async function getPersonajes() {  //Consumo de Api con funcion asincrona

    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=page=1&name=${valorBusqueda}`)
    const data = await res.json();
    setPersonajes(data.results);

    console.log(data);

  }


  return (

    <div className="row justify-content-center">

      {



        personajes.map((p) => {
          let { id, name, image, status, species } = p;

          return (


            <Card border-primary key={id} className="bg-dark tarjeta" style={{ width: '18rem' }} id="card">
              <Card.Img className="avatar" variant="top" src={image} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  <p className="titulo-card">{species}</p>
                  <div className="etiqueta"></div>
                </Card.Text>
                <Card.Text>
                  {
                    (() => {
                      if (status === "Dead") {
                        return (
                          <div id="{status}"> 
                          <img className="icono" src={tumba} alt="tumba" /></div>
                        );
                      } else if (status === "Alive") {
                        return (
                          <div id="{status}"> 
                          <img className="icono" src={corazon} alt="tumba" /></div>
                        );
                      } else {
                        return (
                          <div id="{status}"> 
                          <img className="icono" src={desconocido} alt="tumba" /></div>
                        );
                      }
                    })()}
                </Card.Text>
              </Card.Body>
            </Card>



          )
        })

      }

    </div>




  )
}

export default MiApi