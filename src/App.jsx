import { useEffect, useState } from 'react'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import Login from './components/Auth/Login'
import { getLocalStorage, setLocalStorage, setCurrentUser, getCurrentUser, clearCurrentUser } from './utils/LocalStorage'

const App = () => {
  const [currentUser, setCurrentUserState] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.localStorage) return

    if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
      setLocalStorage()
    }

    const savedUser = getCurrentUser()
    if (savedUser && (savedUser.role === 'admin' || savedUser.role === 'employee')) {
      setCurrentUserState(savedUser)
    }
  }, [])

  const handleLogin = (email, password) => {
    const { employees, admin } = getLocalStorage()
    const adminUser = Array.isArray(admin) ? admin.find((item) => item.email === email && item.password === password) : null
    const employeeUser = Array.isArray(employees)
      ? employees.find((item) => item.email === email && item.password === password)
      : null

    if (adminUser) {
      const user = { role: 'admin', id: adminUser.id, email: adminUser.email }
      setCurrentUser(user)
      setCurrentUserState(user)
      return
    }

    if (employeeUser) {
      const user = { role: 'employee', id: employeeUser.id, email: employeeUser.email }
      setCurrentUser(user)
      setCurrentUserState(user)
      return
    }

    alert('Invalid Credentials')
  }

  const handleLogout = () => {
    clearCurrentUser()
    setCurrentUserState(null)
  }

  return (
    <>
      {!currentUser ? (
        <Login handleLogin={handleLogin} />
      ) : currentUser.role === 'admin' ? (
        <AdminDashboard user={currentUser} onLogout={handleLogout} />
      ) : (
        <EmployeeDashboard user={currentUser} onLogout={handleLogout} />
      )}
    </>
  )
}

export default App
