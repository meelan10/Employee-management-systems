import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext({ employees: [], admin: [] })

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: [] })

  useEffect(() => {
    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        setUserData({ employees: [], admin: [] })
        return
      }

      if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
        setLocalStorage()
      }

      const { employees, admin } = getLocalStorage()
      setUserData({
        employees: Array.isArray(employees) ? employees : [],
        admin: Array.isArray(admin) ? admin : []
      })
    } catch (error) {
      console.error('AuthProvider localStorage error:', error)
      setUserData({ employees: [], admin: [] })
    }
  }, [])

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
