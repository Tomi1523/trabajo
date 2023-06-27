import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Uno from './Componentes/Uno'
import Dos from './Componentes/Dos'

const MiRouter = () => {
  return (
    <>
      <Router>
        <div>
            <Link to="/uno"><button>ir al uno</button></Link>
            <Link to="/dos"><button>ir al dos</button></Link>
        </div>
        
            <Routes>
                <Route path="/uno" element={<Uno/>}></Route>
                <Route path="/dos" element={<Dos/>}></Route>
            </Routes>
        </Router>
    </>
  )
}

export default MiRouter
