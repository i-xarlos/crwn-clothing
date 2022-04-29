import { createSelector } from 'reselect'
import { RootState } from '../root-reducer'
import { UserState } from './user.reducer'

const selectUser = (state: RootState): UserState => state.user

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
