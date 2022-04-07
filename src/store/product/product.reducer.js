// import SHOP_DATA from './shop.data';
import type from './product.types'

const initialState = {
	collections: [],
	isFetching: false,
	errorMessage: undefined,
}

const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case type.FETCH_COLLECTION_START:
			return {
				...state,
				isFetching: true,
			}
		case type.FETCH_COLLECTION_SUCCESS:
			return {
				...state,
				isFetching: false,
				collections: action.payload,
			}
		case type.FETCH_COLLECTION_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
			}
		default:
			return state
	}
}

export default shopReducer
