import types from './user.types'

const initialState = {
	currentUser: null,
	isLoading: false,
	message: '',
	error: { message: '' },
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

		case types.SET_CURRENT_USER_MESSAGE:
			return {
				...state,
				error: initialState.error,
				message: payload,
				isLoading: false,
			}

		case types.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: payload,
				isLoading: false,
			}

		case types.SIGN_IN_FAILED:
			return {
				...state,
				error: payload,
				isLoading: false,
			}

		case types.SIGN_OUT:
			return {
				...initialState,
			}
		default:
			return state
	}
}

export default userReducer
