import { createSelector } from 'reselect'

import { State } from './user.reducer'
import { RootState } from '../store'

export const selectUserReducer = (state: RootState): State => state.user

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
)
