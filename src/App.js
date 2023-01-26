import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from './Componentes/Buscador.jsx';
import MiApi from './Componentes/MiApi.jsx';
import './Style/Style.css';




function App() {
  const [valorBusqueda, setValorBusqueda] = useState('');
  
  return (
    <div className='App'>
     <Buscador setValorBusqueda={setValorBusqueda}></Buscador>
     <MiApi valorBusqueda={valorBusqueda}></MiApi>
    </div>
  );
}

export default App;
