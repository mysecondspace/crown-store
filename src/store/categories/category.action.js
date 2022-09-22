import { CATEGORIES_ACTION_TYPES } from './category.types'

import { createAction } from '../../utils/reducer/reducer.utils'
import { getCollectionAndDocuments } from '../../utils/firebase/firebase.utils'

export const setCategories = () =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES)

export const fetchCategoriesStart = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, categoriesArray)

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  )

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart())

  try {
    const categoriesArray = await getCollectionAndDocuments('categories')

    dispatch(fetchCategoriesSuccess(categoriesArray))
  } catch (error) {
    dispatch(fetchCategoriesFailed(error))
  }
}
