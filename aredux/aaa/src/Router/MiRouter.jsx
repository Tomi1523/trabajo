import React from 'react'
import {  Routes, Route} from "react-router-dom"
import Listado from '../Componentes/Listado'
import Gestion from '../Componentes/Gestion'
const MiRouter = () => {
  return (
  <Routes>
    <Route path="/" element={<Listado/>} ></Route>
    <Route path="/candidatos" element={<Listado/>} ></Route>
    <Route path="/gestion" element={<Gestion/>} ></Route>
    <Route path="*" element={<Listado/>} ></Route>
   
  </Routes>
  )
}

export default MiRouter
