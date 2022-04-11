import types from './user.types'

const initialState = {
	currentUser: null,
	isLoading: false,
}

const userReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case types.FETCH_CURRENT_USER: {
			return {
				...state,
				isLoading: true,
			}
		}
		case types.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload,
				isLoading: false,
			}

		default:
			return state
	}
}

export default userReducer
