import { takeLatest, put, all, call, delay } from 'redux-saga/effects'
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
import { safe, resolvingErrorMessages } from '../../utils/sagas/sagas.utils'

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
	const userSnapShot = yield call(
		createUserDocumentFromAuth,
		userAuth,
		additionalData
	)
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
			additionalData?.displayName || userSnapShot?.data().displayName || 'USER'
		}!, you have successfully logged in. Welcome to <ixarlos> [STORE]`,
	})

	yield delay(3000)

	yield put({
		type: types.SET_CURRENT_USER_MESSAGE,
		payload: '',
	})
}

export function* isUserAuthenticated() {
	yield put({ type: types.FETCH_CURRENT_USER })
	const userAuth = yield call(getCurrentUser)
	if (!userAuth) return
	yield call(getSnapshotFromUserAuth, userAuth)
}

export function* signInWithGoogle() {
	const { user } = yield call(signInWithGooglePopup)
	yield call(getSnapshotFromUserAuth, user)
}

export function* signInWithEmail({ payload: { email, password } }) {
	const { user } = yield call(
		signInWithEmailAndPasswordFromAuth,
		email,
		password
	)

	yield call(getSnapshotFromUserAuth, user)
}

export function* createUserFromEmailAndPass({
	payload: { email, password, displayName },
}) {
	const { user } = yield call(
		createUserWithEmailAndPasswordFromAuth,
		email,
		password
	)
	yield put(emailSignUpSuccess(user, { displayName }))
}

export function* signOut() {
	yield signOutUser()
	put({ type: types.SIGN_OUT })
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
	yield call(getSnapshotFromUserAuth, user, additionalData)
}

export function* onError(err) {
	yield put(signInFaild(resolvingErrorMessages(err)))
	yield delay(3000)
	yield put(signInFaild({ message: '' }))
}

export function* onCreateUserWithEmailAndPass() {
	yield takeLatest(
		types.CREATE_USER_FROM_EMAIL_AND_PASSWORD,
		safe(onError, createUserFromEmailAndPass)
	)
}

export function* onSignUpSuccess() {
	yield takeLatest(
		types.EMAIL_PASS_SIGN_UP_SUCCESS,
		safe(onError, signInAfterSignUp)
	)
}

export function* onGoogleSignInStart() {
	yield takeLatest(types.GOOGLE_SIGN_IN_START, safe(onError, signInWithGoogle))
}

export function* onEmailSignInstart() {
	yield takeLatest(types.EMAIL_SIGN_IN_START, safe(onError, signInWithEmail))
}

export function* onCheckUserSession() {
	yield takeLatest(types.CHECK_USER_SESSION, safe(onError, isUserAuthenticated))
}

export function* onSignOut() {
	yield takeLatest(types.SIGN_OUT, safe(onError, signOut))
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
