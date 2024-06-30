import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUSer] = useState({})

  const getUserData = () => {
    return user
  }

  const setUserData = userData => {
    setUSer(userData)
    return user
  }

  return (
    <UserContext.Provider value={{ getUserData, setUserData }}>
      {children}
    </UserContext.Provider>
  )
}
