import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { guardarMiNombre, incrementarPuntuacion, modificarUnValor, agregarUnValor, eliminarUnValor} from '../Store/misSlices';

const Uno = () => {
  //--------//
    const dispatch = useDispatch();

    const modificar = () =>{
      dispatch(guardarMiNombre("tomi distinto"))
    }

    const incrementar = () =>{
      dispatch(incrementarPuntuacion())
    }

    //-------//
    const miNombreAhora = useSelector(state => state.unValor.miNombre)
    const edad = useSelector(state => state.unValor.edad)
    const miPuntuacionAhora = useSelector(state => state.otroValor.puntuacion)
    //-------//
    const modifcarArr = () =>{
      dispatch(modificarUnValor({
        indice:0,
        nuevoNombre:"rrrrrreact",
        nuevoInicio:2024,
      }))
    }

    //------agregar-----/

    const agregar = () =>{
      dispatch(agregarUnValor({
        nuevoNombre:"Vue",
        nuevoInicio:88,
      }))
    }

    const eliminar = () =>{
      dispatch(eliminarUnValor("Vue"))
    }
    

  return (
    <div>
      <h1>{miNombreAhora}</h1>
      <h1>{edad}</h1>
      <h1>{miPuntuacionAhora}</h1>
      <button onClick={incrementar}>incrementar</button>
      <button onClick={modifcarArr}>modifcarArr</button>
      <button onClick={modificar}>modificar mi nombre</button>
      <button onClick={agregar}>agregar un valor</button>
      <button onClick={eliminar}>eliminar  vue</button>
    </div>
  )
}

export default Uno
