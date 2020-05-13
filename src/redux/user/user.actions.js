import type from './user.types';

export const setCurrentUser = (user) => ({
	type: type.SET_CURRENT_USER,
	payload: user,
});
