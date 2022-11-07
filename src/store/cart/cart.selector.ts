import { createSelector } from 'reselect'

import { State } from './cart.reducer'
import { RootState } from '../store'

const selectCartReducer = (state: RootState): State => state.cart

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
)

export const selectItems = createSelector(
  [selectCartReducer],
  (cart) => cart.items
)

export const selectCount = createSelector([selectItems], (items) =>
  items.reduce((total, item) => total + item.quantity, 0)
)

export const selectTotal = createSelector([selectItems], (items) =>
  items.reduce((total, item) => total + item.quantity * item.price, 0)
)
