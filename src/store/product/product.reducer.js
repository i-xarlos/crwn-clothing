import types from './product.types'

const initialState = {
	collections: [],
	isLoading: false,
	errorMessage: undefined,
}

const shopReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case types.FETCH_COLLECTION_START:
			return {
				...state,
				isLoading: true,
			}
		case types.FETCH_COLLECTION_SUCCESS:
			return {
				...state,
				isLoading: false,
				collections: payload,
			}
		case types.FETCH_COLLECTION_FAILURE:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
			}
		default:
			return state
	}
}

export default shopReducer
