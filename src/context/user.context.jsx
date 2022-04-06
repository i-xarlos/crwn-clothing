import { createContext, useEffect, useReducer } from 'react'
import {
  createUserDocumentFromAuth,
  getSignInUserFromAuth,
  onAuthStateChangedListener,
} from '../config/firebase/firebase.utils'

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
})

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const INITIAL_STATE = {
  currentUser: null,
}

const userReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload }

    default:
      throw new Error(`Unhandled ${type} in userReducer`)
  }
}

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)

  const setCurrentUser = user => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
  }

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
