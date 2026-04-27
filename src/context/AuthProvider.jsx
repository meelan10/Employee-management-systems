import React from 'react'

export const AuthContext = createContext()

const AuthProvider = ({Children}) => {
  return (
    <div>
      <AuthContext.Provider value={"Milan"}>
        {Children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
