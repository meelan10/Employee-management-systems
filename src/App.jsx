import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import { setLocalStorage } from "./utils/LocalStorage"
import AuthProvider from './context/AuthProvider'
const App = () => {
const [user, setuser] = useState(null)


const handleLogin = (email,password)=> {
if(email == 'admin@me.com' && password == '123'){
  setuser('admin')
}
else if (email == 'user@me.com ' && password == '123'){
  setuser('employee')
}
else{
  alert("Invalid Credentials")
}
}
 const data = useContext (AuthContext)
 console.log(data)


  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />: '' }

    {user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App
