import { takeEvery, call, put } from 'redux-saga/effects'
import ShopActionsTypes from './shop.types'
import {
	db,
	convertCollectionsSnapshotToMap,
} from '../../config/firebase/firebase.utils'
import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure,
} from './shop.actions'

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = db.collection('collections')
		const snapshot = yield collectionRef.get()
		const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot)

		yield put(fetchCollectionsSuccess(collectionMap))
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
