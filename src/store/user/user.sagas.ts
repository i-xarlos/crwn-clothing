import { takeLatest, put, all, call, delay } from 'typed-redux-saga/macro'
import types from './user.types'
import {
  EmailSignInStart,
  EmailSignUp,
  EmailSignUpSuccess,
  emailSignUpSuccess,
  signInFaild,
  signInSuccess,
} from './user.actions'
import { AuthError, User } from 'firebase/auth'

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithEmailAndPasswordFromAuth,
  signOutUser,
  createUserWithEmailAndPasswordFromAuth,
  AdditionalData,
  resolvingErrorMessages,
} from '../../utils/firebase/firebase.utils'
import { safe } from '../../utils/sagas/sagas.utils'

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalData?: AdditionalData
) {
  const userSnapShot = yield* call(
    createUserDocumentFromAuth,
    userAuth,
    additionalData
  )
  if (userSnapShot) {
    yield* put(
      signInSuccess({
        id: userSnapShot.id,
        ...userSnapShot.data(),
        ...additionalData,
      })
    )
  }
  yield* put({
    type: types.SET_CURRENT_USER_MESSAGE,
    payload: `Hello ${
      additionalData?.displayName || userSnapShot?.data().displayName || 'USER'
    }!, you have successfully logged in. Welcome to <ixarlos> [STORE]`,
  })

  yield* delay(3000)

  yield* put({
    type: types.SET_CURRENT_USER_MESSAGE,
    payload: '',
  })
}

export function* isUserAuthenticated() {
  yield* put({ type: types.FETCH_CURRENT_USER })
  const userAuth = yield* call(getCurrentUser)
  if (!userAuth) return
  yield* call(getSnapshotFromUserAuth, userAuth)
}

export function* signInWithGoogle() {
  const { user } = yield* call(signInWithGooglePopup)
  yield* call(getSnapshotFromUserAuth, user)
}

export function* signInWithEmail({
  payload: { email, password },
}: EmailSignInStart) {
  const userCredential = yield* call(
    signInWithEmailAndPasswordFromAuth,
    email,
    password
  )

  if (userCredential) {
    const { user } = userCredential
    yield* call(getSnapshotFromUserAuth, user)
  }
}

export function* createUserFromEmailAndPass({
  payload: { email, password, displayName },
}: EmailSignUp) {
  const userCredential = yield* call(
    createUserWithEmailAndPasswordFromAuth,
    email,
    password
  )
  if (userCredential) {
    const { user } = userCredential
    yield* put(emailSignUpSuccess(user, { displayName }))
  }
}

export function* signOut() {
  yield* call(signOutUser)
  put({ type: types.SIGN_OUT })
}

export function* signInAfterSignUp({
  payload: { user, additionalData },
}: EmailSignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalData)
}

export function* onError(err: Error) {
  yield* put(signInFaild(resolvingErrorMessages(err as AuthError)))
  yield* delay(3000)
  yield* put(signInFaild({ message: '' } as AuthError))
}

export function* onCreateUserWithEmailAndPass() {
  yield* takeLatest(
    types.CREATE_USER_FROM_EMAIL_AND_PASSWORD,
    safe(onError, createUserFromEmailAndPass)
  )
}

export function* onSignUpSuccess() {
  yield* takeLatest(
    types.EMAIL_PASS_SIGN_UP_SUCCESS,
    safe(onError, signInAfterSignUp)
  )
}

export function* onGoogleSignInStart() {
  yield* takeLatest(types.GOOGLE_SIGN_IN_START, safe(onError, signInWithGoogle))
}

export function* onEmailSignInstart() {
  yield* takeLatest(types.EMAIL_SIGN_IN_START, safe(onError, signInWithEmail))
}

export function* onCheckUserSession() {
  yield* takeLatest(
    types.CHECK_USER_SESSION,
    safe(onError, isUserAuthenticated)
  )
}

export function* onSignOut() {
  yield* takeLatest(types.SIGN_OUT, safe(onError, signOut))
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInstart),
    call(onCreateUserWithEmailAndPass),
    call(onSignOut),
    call(onSignUpSuccess),
  ])
}
