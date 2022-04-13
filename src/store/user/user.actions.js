import { createAction } from '../../utils/reducer/reducer.utils'
import types from './user.types'

export const fetchCurrentUser = () => ({
	type: types.FETCH_CURRENT_USER,
})

export const signOutUser = () => ({
	type: types.SIGN_OUT,
})

export const setCurrentUserMessage = message => ({
	type: types.SET_CURRENT_USER_MESSAGE,
	payload: message,
})

export const setCurrentUser = user => ({
	type: types.SET_CURRENT_USER,
	payload: user,
})

export const checkUserSession = () => createAction(types.CHECK_USER_SESSION)

export const googleSignInStart = () => createAction(types.GOOGLE_SIGN_IN_START)

export const emailSignInStart = (email, password) =>
	createAction(types.EMAIL_SIGN_IN_START, { email, password })

export const emailSignUp = (email, password, displayName) =>
	createAction(types.CREATE_USER_FROM_EMAIL_AND_PASSWORD, {
		email,
		password,
		displayName,
	})

export const emailSignUpSuccess = (user, additionalData) =>
	createAction(types.EMAIL_PASS_SIGN_UP_SUCCESS, {
		user,
		additionalData,
	})

export const signInSuccess = user => createAction(types.SIGN_IN_SUCCESS, user)

export const signInFaild = error => createAction(types.SIGN_IN_FAILED, error)
