import Email from "./Componentes/Email"
import Header from "./Componentes/Header"
import {useDispatch} from "react-redux"
import {useEffect} from "react"
import { addUser } from "./Redux/UserSlice"
const App = () => {

  useEffect(()=> {
      fetch("https://jsonplaceholder.typicode.com/users/2")
        .then((res) => res.json())
        .then((data) => dispatch(addUser(data)))
        .catch((error)=> console.log(error))
  },[])


  const dispatch = useDispatch();

  return (
    <div>
      <Header></Header>
      <Email></Email>
    </div>
  )
}

export default App

