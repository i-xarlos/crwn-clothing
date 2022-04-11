import { all, call } from 'redux-saga/effects'

import { fetchCollectionsStart } from './product/product.sagas'

export function* rootSaga() {
	all(fetchCollectionsStart())
}
