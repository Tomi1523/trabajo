import React from 'react'
import  "../index.css"
const Candidato = ({valor, onBuscarUno, index, onGuardarUno}) => {
  return (
    <>
        <div className='usuario'>
            <div className='foto'>
                <img src={valor.picture.large}></img>
            </div>
            <div className='datos'>
                <div className='nombre'>{valor.name.title} {valor.name.first} {valor.name.last}</div>
                <div>Ubicacion: {valor.location.city} ({valor.location.country})</div>
                <div><a href='#'>{valor.email}</a></div>
                <div><a href='#'>{valor.phone}</a></div>
            </div>
                <div className='botones'>
                <button onClick={()=>onBuscarUno(index)} className='rojo'>Ocultar</button>
                <button  onClick={()=> onGuardarUno(valor, index)} className='verde'>Guardar</button>
                </div>
        </div>
    </>
  )
}

export default Candidato
