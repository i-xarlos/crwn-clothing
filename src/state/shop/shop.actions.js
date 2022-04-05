import type from './shop.types'

export const fetchCollectionsStart = () => ({
	type: type.FETCH_COLLECTION_START,
})

export const fetchCollectionsSuccess = collectionMap => ({
	type: type.FETCH_COLLECTION_SUCCESS,
	payload: collectionMap,
})

export const fetchCollectionsFailure = errorMessage => ({
	type: type.FETCH_COLLECTION_FAILURE,
	payload: errorMessage,
})
