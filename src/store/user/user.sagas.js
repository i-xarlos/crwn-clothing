import { takeLatest, put, all, call } from 'redux-saga/effects'
import types from './user.types'
import { emailSignUpSuccess, signInFaild, signInSuccess } from './user.actions'
import {
	getCurrentUser,
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInWithEmailAndPasswordFromAuth,
	signOutUser,
	createUserWithEmailAndPasswordFromAuth,
} from '../../utils/firebase/firebase.utils'
import { resolvingErrorMessages } from '../../utils/sagas/sagas.utils'

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
	try {
		const userSnapShot = yield call(
			createUserDocumentFromAuth,
			userAuth,
			additionalData
		)
		//console.log('getSnapshotFromUserAuth', userAuth, additionalData)
		//console.log('userSnapShot', userSnapShot)
		yield put(
			signInSuccess({
				id: userSnapShot.id,
				...userSnapShot.data(),
				...additionalData,
			})
		)
		yield put({
			type: types.SET_CURRENT_USER_MESSAGE,
			payload: `Hello ${
				additionalData?.displayName || userSnapShot?.data().displayName
			}!, you have successfully logged in. Welcome to <ixarlos> [STORE]`,
		})
	} catch (err) {
		yield put(signInFaild(resolvingErrorMessages(err)))
	}
}

export function* isUserAuthenticated() {
	yield put({ type: types.FETCH_CURRENT_USER })
	try {
		const userAuth = yield call(getCurrentUser)
		if (!userAuth) return
		yield call(getSnapshotFromUserAuth, userAuth)
	} catch (err) {
		yield put(signInFaild(resolvingErrorMessages(err)))
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield call(signInWithGooglePopup)
		yield call(getSnapshotFromUserAuth, user)
	} catch (err) {
		yield put(signInFaild(resolvingErrorMessages(err)))
	}
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield call(
			signInWithEmailAndPasswordFromAuth,
			email,
			password
		)

		yield call(getSnapshotFromUserAuth, user)
	} catch (err) {
		yield put(signInFaild(resolvingErrorMessages(err)))
	}
}

export function* createUserFromEmailAndPass({
	payload: { email, password, displayName },
}) {
	try {
		console.log('createUserFromEmailAndPass', email, password, displayName)
		const { user } = yield call(
			createUserWithEmailAndPasswordFromAuth,
			email,
			password
		)
		console.log('createUserFromEmailAndPass user', user)
		yield put(emailSignUpSuccess(user, { displayName }))
	} catch (err) {
		yield put(signInFaild(resolvingErrorMessages(err)))
	}
}

export function* signOut() {
	try {
		yield signOutUser()
		put({ type: types.SIGN_OUT })
	} catch (err) {
		yield put(signInFaild(resolvingErrorMessages(err)))
	}
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
	yield call(getSnapshotFromUserAuth, user, additionalData)
}

export function* onCreateUserWithEmailAndPass() {
	yield takeLatest(
		types.CREATE_USER_FROM_EMAIL_AND_PASSWORD,
		createUserFromEmailAndPass
	)
}

export function* onSignUpSuccess() {
	yield takeLatest(types.EMAIL_PASS_SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onGoogleSignInStart() {
	yield takeLatest(types.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInstart() {
	yield takeLatest(types.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
	yield takeLatest(types.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOut() {
	yield takeLatest(types.SIGN_OUT, signOut)
}

export function* userSagas() {
	yield all([
		call(onCheckUserSession),
		call(onGoogleSignInStart),
		call(onEmailSignInstart),
		call(onCreateUserWithEmailAndPass),
		call(onSignOut),
		call(onSignUpSuccess),
	])
}
