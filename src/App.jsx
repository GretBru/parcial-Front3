import React, { useState } from 'react';
import './App.css'
import Card from './components/Card'

function App() {

  const [favorito, setFavorito] = useState({
    nombre: '',
    color: '',
})
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
      event.preventDefault(); 
       
        if ((nombre.length < 3 && (nombre.startsWith(" ")) && (color.length < 6)) ) {
          setShow(true)
          setError(false)
      } else {
          setShow(false)
          setError(true)
      }
    };

    const handleChange = (event) => setFavorito({...favorito, nombre: event.target.value})

  return (
    <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input type="text" onChange={handleChange}/>
        <label>Color Favorito: </label>
        <input type="text" onChange={(event) => setFavorito({...favorito, color: event.target.value})}/>
        <button>Enviar</button>
    
        {error && <h6>Por favor chequea que la información sea correcta!</h6>}

        {show && <Card  nombre= {favorito.nombre}  color= {favorito.color}/>}
       
    </form>
  )
}


export default App