import type from './user.types'

export const fetchCurrentUser = () => ({
	type: type.FETCH_CURRENT_USER,
})

export const setCurrentUser = user => ({
	type: type.SET_CURRENT_USER,
	payload: user,
})
