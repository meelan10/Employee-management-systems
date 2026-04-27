// import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
// import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { useEffect } from "react"
import Login from "./components/Auth/Login"
import { setLocalStorage } from "./utils/LocalStorage"
// import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
const App = () => {

useEffect(()=> {
  setLocalStorage()
})


  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      {/* <AdminDashboard /> */}
       <Login /> 
      {/* <EmployeeDashboard /> */}
    </div>
  )
}

export default App
