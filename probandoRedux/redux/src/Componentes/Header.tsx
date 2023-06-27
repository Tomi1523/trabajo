import {useSelector} from "react-redux"

const Header = () => {

  const user = useSelector((state :any) => state.user)

  return (
    <header>
        <h1>Redux Toolkit</h1>
        <ul>
            <li>Name: {user.name}</li>
            <li>Email: {user.email} </li>
            <li>Username: {user.username}</li>
        </ul>
    </header>
  )
}

export default Header
