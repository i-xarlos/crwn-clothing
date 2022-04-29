import { User } from 'firebase/auth'
import { AdditionalData, UserData } from '../../utils/firebase/firebase.utils'
import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from '../../utils/reducer/reducer.utils'
import types from './user.types'

export type FetchCurrentUser = Action<types.FETCH_CURRENT_USER>
export type SignOutUser = Action<types.SIGN_OUT>
export type SetCurrentUserMessage = ActionWithPayload<
  types.SET_CURRENT_USER_MESSAGE,
  string
>
export type SetCurrentUser = ActionWithPayload<types.SET_CURRENT_USER, UserData>
export type CheckUserSession = Action<types.CHECK_USER_SESSION>
export type GoogleSignInStart = Action<types.GOOGLE_SIGN_IN_START>
export type EmailSignInStart = ActionWithPayload<
  types.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>
export type EmailSignUp = ActionWithPayload<
  types.CREATE_USER_FROM_EMAIL_AND_PASSWORD,
  { email: string; password: string; displayName: string }
>
export type EmailSignUpSuccess = ActionWithPayload<
  types.EMAIL_PASS_SIGN_UP_SUCCESS,
  { user: User; additionalData: AdditionalData }
>
export type SignInSuccess = ActionWithPayload<types.SIGN_IN_SUCCESS, UserData>

export type SignInFaild = ActionWithPayload<types.SIGN_IN_FAILED, Error>

export const fetchCurrentUser = withMatcher(
  (): FetchCurrentUser => createAction(types.FETCH_CURRENT_USER)
)

export const signOutUser = withMatcher(
  (): SignOutUser => createAction(types.SIGN_OUT)
)

export const setCurrentUserMessage = withMatcher(
  (message: string): SetCurrentUserMessage =>
    createAction(types.SET_CURRENT_USER_MESSAGE, message)
)

export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser => createAction(types.SET_CURRENT_USER, user)
)

export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(types.CHECK_USER_SESSION)
)

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => createAction(types.GOOGLE_SIGN_IN_START)
)

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(types.EMAIL_SIGN_IN_START, { email, password })
)

export const emailSignUp = withMatcher(
  (email: string, password: string, displayName: string): EmailSignUp =>
    createAction(types.CREATE_USER_FROM_EMAIL_AND_PASSWORD, {
      email,
      password,
      displayName,
    })
)

export const emailSignUpSuccess = withMatcher(
  (user: User, additionalData: AdditionalData): EmailSignUpSuccess =>
    createAction(types.EMAIL_PASS_SIGN_UP_SUCCESS, {
      user,
      additionalData,
    })
)

export const signInSuccess = withMatcher(
  (user: UserData & { id: string }): SignInSuccess =>
    createAction(types.SIGN_IN_SUCCESS, user)
)

export const signInFaild = withMatcher(
  (error: Error): SignInFaild => createAction(types.SIGN_IN_FAILED, error)
)
