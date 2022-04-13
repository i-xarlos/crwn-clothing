import { all, call } from 'redux-saga/effects'

import { productsSagas } from './product/product.sagas'
import { userSagas } from './user/user.sagas'

export function* rootSaga() {
	yield all([call(productsSagas), call(userSagas)])
}
