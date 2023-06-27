import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Trabajador from './Trabajador'
import { eliminarUnValor, modificarUnValor } from '../Store/miSlice'

const Gestion = () => {
  const dispatch=useDispatch()
  const actulizar=(pais, index)=>{
      dispatch(modificarUnValor(
        {
          indice:index,
          nuevoPais:pais
        }
      ))
  }

  const eliminar=(valor)=>{
    dispatch(eliminarUnValor(
      {
        nombre:valor.name.first,
        apellido:valor.name.last,
        telefono:valor.cell
      }
    ))
  }

  const listaTrabajadores = useSelector(state => state.misTrabajadores.trabajadores)
  return (
    <div>
      <h1>Trabajadores</h1>
      <Link to="/candidatos"><button>Candidatos</button></Link>
      <div className='usuarios'>
        {listaTrabajadores.map((valor,index)=>
          <Trabajador valor={valor} index={index} onActulizar={actulizar} onEliminar={eliminar}/>
        )}
      </div>
    </div>
  )
}

export default Gestion
