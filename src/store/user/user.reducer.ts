import { AnyAction } from 'redux'
import { UserData } from '../../utils/firebase/firebase.utils'
import {
  fetchCurrentUser,
  setCurrentUserMessage,
  signInFaild,
  signInSuccess,
  signOutUser,
} from './user.actions'

export type UserState = {
  readonly currentUser: UserData | null
  readonly isLoading: boolean
  readonly message: string
  readonly error: { message: string }
}

const initialState = {
  currentUser: null,
  isLoading: false,
  message: '',
  error: { message: '' },
}

const userReducer = (state = initialState, action: AnyAction): UserState => {
  if (fetchCurrentUser.match(action)) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (setCurrentUserMessage.match(action)) {
    return {
      ...state,
      error: initialState.error,
      message: action.payload,
      isLoading: false,
    }
  }

  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
      isLoading: false,
    }
  }

  if (signInFaild.match(action)) {
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    }
  }

  if (signOutUser.match(action)) {
    return {
      ...initialState,
    }
  }
  return state
}

export default userReducer
