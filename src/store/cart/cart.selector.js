import { createSelector } from 'reselect'

const selectCartReducer = (state) => state.cart

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
