import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { guardarMiNombre, incrementarPuntuacion,modificarUnValor,agregarUnValor,eliminarUnValor } from '../Store/misSlices';


const Dos = () => {
  const dispatch = useDispatch();

  const incrementar = () =>{
    dispatch(incrementarPuntuacion())
  }

  const agregar = () =>{
    dispatch(agregarUnValor({
      nuevoNombre:"Vue",
      nuevoInicio:88,
    }))
  }

  const eliminar = () =>{
    dispatch(eliminarUnValor("Vue"))
  }

  const modifcarArr = () =>{
    dispatch(modificarUnValor({
      indice:0,
      nuevoNombre:"rrrrrreact",
      nuevoInicio:2024,
    }))
  }

  const miArrayAhora = useSelector(state => state.unValor.bibliotecas)
  const miPuntuacionAhora = useSelector(state => state.otroValor.puntuacion)
  const miNombreAhora = useSelector(state => state.unValor.miNombre)
  return (
    <div>
      
      <h1>{miNombreAhora}</h1>
      {miArrayAhora.map(valor =>
      <div>  {valor.nombre} ({valor.inicio})</div>
      )}
      <h1>{miPuntuacionAhora}</h1>
      <button onClick={modifcarArr}>modifcarArr</button>
      <button onClick={incrementar}>incrementar</button>
      <button onClick={agregar}>agregar un valor</button>
      <button onClick={eliminar}>eliminar  vue</button>
    </div>
  )
}

export default Dos
