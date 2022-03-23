import type from './shop.types';

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
	type: type.FETCH_COLLECTION_START,
});

export const fetchCollectionsSuccess = collectionMap => ({
	type: type.FETCH_COLLECTION_SUCCESS,
	payload: collectionMap,
});

export const fetchCollectionsFailure = errorMessage => ({
	type: type.FETCH_COLLECTION_FAILURE,
	payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
	return dispatch => {
		const collectionRef = firestore.collection('collections');
		dispatch(fetchCollectionsStart());

		collectionRef
			.get()
			.then(snapshot => {
				const collectionMap = convertCollectionsSnapshotToMap(snapshot);
				dispatch(fetchCollectionsSuccess(collectionMap));
			})
			.catch(error => dispatch(fetchCollectionsFailure(error.message)));
	};
};
