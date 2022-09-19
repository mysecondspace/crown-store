import { CART_ACTION_TYPES } from './cart.types'
import { createAction } from '../../utils/reducer/reducer.utils'

const addItem = (items, productToAdd) => {
  // find the item to add
  const existingItem = items.find((item) => item.id === productToAdd.id)

  // retrun back items witch matching item with reduced quantity
  if (existingItem) {
    return items.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  }

  return [...items, { ...productToAdd, quantity: 1 }]
}

const removeItem = (items, productToRemove) => {
  // find the item to remove
  const existingItem = items.find((item) => item.id === productToRemove.id)

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingItem.quantity === 1)
    return items.filter((item) => item.id !== productToRemove.id)

  // retrun back items witch matching item with reduced quantity
  return items.map((item) =>
    item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  )
}

const clearItem = (items, productToClear) =>
  items.filter((item) => item.id !== productToClear.id)

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)

export const addItemToCart = (items, productToAdd) => {
  const newItems = addItem(items, productToAdd)

  return createAction(CART_ACTION_TYPES.SET_ITEMS, newItems)
}

export const removeItemFromCart = (items, productToRemove) => {
  const newItems = removeItem(items, productToRemove)

  return createAction(CART_ACTION_TYPES.SET_ITEMS, newItems)
}

export const clearItemFromCart = (items, productToClear) => {
  const newItems = clearItem(items, productToClear)

  return createAction(CART_ACTION_TYPES.SET_ITEMS, newItems)
}
