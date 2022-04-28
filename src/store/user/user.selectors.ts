import { createSelector } from 'reselect'
import { UserState } from './user.reducer'

const selectUser = (state: any): UserState => state.user

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
