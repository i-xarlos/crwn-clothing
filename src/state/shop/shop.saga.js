import { takeEvery } from 'redux-saga/effectsthunk';
import ShopActionsTypes from './shop.types';

export function* fetchCollectionsAsync() {
	yield console.log("I'm fired");
}
export function* fetchCollectionsStart() {
	yield takeEvery(
		ShopActionsTypes.FETCH_COLLECTION_START,
		fetchCollectionsAsync,
	);
}
