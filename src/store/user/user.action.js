import { USER_ACTION_TYPES } from './user.types'

import { createAction } from '../../utils/reducer/reducer.utils'

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)

export const emailSignInStart = () =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START)

export const signInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS)

export const signInFailed = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED)
