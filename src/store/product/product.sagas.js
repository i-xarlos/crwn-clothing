import { call, put, takeLatest, all } from 'redux-saga/effects'
import types from './product.types'
import { getCollectionAndDocuments } from '../../utils/firebase/firebase.utils'
import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure,
} from './product.actions'

export function* fetchCollectionsAsync() {
	try {
		const collectionArray = yield call(getCollectionAndDocuments, 'categories')
		yield put(fetchCollectionsSuccess(collectionArray))
	} catch (e) {
		yield put(fetchCollectionsFailure(e.message))
	}
}

export function* onFetchCategories() {
	yield takeLatest(types.FETCH_COLLECTION_START, fetchCollectionsAsync)
}

export function* productsSagas() {
	yield all([call(onFetchCategories)])
}
