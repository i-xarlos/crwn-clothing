import type from './product.types'

export const fetchCollectionsStart = () => ({
	type: type.FETCH_COLLECTION_START,
})

export const fetchCollectionsSuccess = collection => ({
	type: type.FETCH_COLLECTION_SUCCESS,
	payload: collection,
})

export const fetchCollectionsFailure = errorMessage => ({
	type: type.FETCH_COLLECTION_FAILURE,
	payload: errorMessage,
})
