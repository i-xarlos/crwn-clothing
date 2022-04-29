import { all, call } from 'typed-redux-saga/macro'

import { productsSagas } from './product/product.sagas'
import { userSagas } from './user/user.sagas'

export function* rootSaga() {
  yield* all([call(productsSagas), call(userSagas)])
}
