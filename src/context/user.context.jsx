import { createContext, useState, useEffect } from 'react'
import {
  createUserDocumentFromAuth,
  getSignInUserFromAuth,
  onAuthStateChangedListener,
} from '../config/firebase/firebase.utils'

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChangedListener(async user => {
      if (user) {
        createUserDocumentFromAuth(user)
        const dataUser = await getSignInUserFromAuth(user)
        if (dataUser) user.displayName = dataUser.displayName.stringValue
      }
      setCurrentUser(user)
    })
    return unsubscribeFromAuth
  }, [])
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
