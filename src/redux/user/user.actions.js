import * as type from './user.constants';

export const setCurrentUser = (user) => ({
	type: type.SET_CURRENT_USER,
	payload: user,
});
