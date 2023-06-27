import React from 'react'
import { useSelector } from 'react-redux'


const Trabajador = ({valor, index, onActulizar, onEliminar}) => {

    const departamentos=useSelector(state => state.misDepartamentos.departamentos)
  return (
    <>
        <div className='columna'>
            <div className='fotoUsuario'>
                <img src={valor.picture.large}></img>
            </div>
            <div className='nombreUsuarios'>
                <strong>
                    {valor.name.last},{valor.name.first}
                </strong>
            </div>
            <div>{valor.location.city}</div>
            <div>({valor.location.country})</div>
            <div>
                <select onChange={(event)=>onActulizar(event.target.value,index)}>
                    <option>selecciona:</option>
                    {
                        departamentos.map((esteValor, i)=>
                        valor.departamentos===esteValor 
                        ? <option selected key={i}>{esteValor}</option>
                        : <option key={i}>{esteValor}</option>)
                    }
                </select>
            </div>
            <div><button className='rojo' onClick={()=> onEliminar(valor)} >Eliminar</button></div>
        </div>
    </>
  )
}

export default Trabajador
