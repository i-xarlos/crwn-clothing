import { takeEvery, put } from 'redux-saga/effects'
import ShopActionsTypes from './product.types'
import { getCollectionAndDocuments } from '../../config/firebase/firebase.utils'
import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure,
} from './product.actions'

export function* fetchCollectionsAsync() {
	try {
		const collectionArray = yield getCollectionAndDocuments('categories')

		yield put(fetchCollectionsSuccess(collectionArray))
	} catch (e) {
		yield put(fetchCollectionsFailure(e.message))
	}
}
export function* fetchCollectionsStart() {
	yield takeEvery(
		ShopActionsTypes.FETCH_COLLECTION_START,
		fetchCollectionsAsync
	)
}
