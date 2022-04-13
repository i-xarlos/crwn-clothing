import { createSelector } from 'reselect'

const selectUser = state => state.user

export const selectCurrentUser = createSelector(
	[selectUser],
	user => user.currentUser
)

export const selectCurrentUserError = createSelector(
	[selectUser],
	user => user.error
)

export const selectCurrentUserMessage = createSelector(
	[selectUser],
	user => user.message
)
