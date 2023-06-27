import React, { useEffect, useState } from 'react'
import Candidato from './Candidato'
import { useDispatch, useSelector } from 'react-redux'
import { agregarUnValor } from '../Store/miSlice';
import { Link} from "react-router-dom"

const Listado = () => {
  const dispatch = useDispatch();

    const listaTrabajadores=useSelector(state => state.misTrabajadores.trabajadores)
    const [candidatos, setCandidatos] = useState([])

    useEffect(() => {
      fetch("https://randomuser.me/api/?results=6")
        .then((res) => res.json())
        .then((datos)=> setCandidatos(datos.results))
    }, [])
    
      const buscarUno=(indice)=>{
        fetch("https://randomuser.me/api/?results=6")
        .then((res) => res.json())
        .then((datos)=>{ 
            const provsional=[...candidatos]
            provsional[indice]={...datos.results[0]}
            setCandidatos(provsional)
        })
      }

      const guardarUno=(valor, index)=>{
        const nuevoValor={...valor, departamento:""}
          dispatch(agregarUnValor(nuevoValor))
          buscarUno(index)
      }

  return (
   <>
   <h1>Candidatos: </h1>
   <Link to="/gestion"><button>Trabajadores</button></Link>
   <div className='presentacion'>
    {candidatos.map((valor, index)=>
      <Candidato valor={valor} index={index} onBuscarUno={buscarUno} onGuardarUno={guardarUno}/>
    )}
    </div>
    <hr/>
    <div className='candidatos'>
      {listaTrabajadores.map((valor, i)=>
       <Link key={i} to="/gestion"> <button>{valor.name.first}</button> </Link> 
      )}
    </div>
   </>
  )
}

export default Listado
