import { call } from 'redux-saga/effects'
export const safe = (handler = null, saga, ...args) =>
	function* (action) {
		try {
			yield call(saga, ...args, action)
		} catch (err) {
			yield call(handler, ...args, err)
		}
	}

export const resolvingErrorMessages = err => {
	let message = ''

	switch (err.code) {
		case 'auth/popup-closed-by-user':
			message = 'Pop up closed by user'
			break
		case 'auth/email-already-in-use':
			message = 'Cannot create user, email already in use'
			break
		case 'auth/wrong-password':
			message = 'Incorrect password for email'
			break
		case 'auth/user-not-found':
			message = 'No user associated with this email'
			break
		default:
			message = err.message
	}
	return { ...err, message }
}
