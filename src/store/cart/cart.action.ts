import { CART_ACTION_TYPES, Item } from './cart.types'
import { CategoryItem } from '../categories/category.types'
import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from '../../utils/reducer/reducer.utils'

const addItem = (items: Item[], productToAdd: CategoryItem): Item[] => {
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

const removeItem = (items: Item[], productToRemove: Item): Item[] => {
  // find the item to remove
  const existingItem = items.find((item) => item.id === productToRemove.id)

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingItem && existingItem.quantity === 1)
    return items.filter((item) => item.id !== productToRemove.id)

  // retrun back items witch matching item with reduced quantity
  return items.map((item) =>
    item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  )
}

const clearItem = (items: Item[], productToClear: Item) =>
  items.filter((item) => item.id !== productToClear.id)

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>

export type SetItems = ActionWithPayload<CART_ACTION_TYPES.SET_ITEMS, Item[]>

export const setIsCartOpen = withMatcher((boolean: boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
)

export const setItems = withMatcher((items: Item[]) =>
  createAction(CART_ACTION_TYPES.SET_ITEMS, items)
)

export const addItemToCart = (items: Item[], productToAdd: CategoryItem) => {
  const newItems = addItem(items, productToAdd)

  return setItems(newItems)
}

export const removeItemFromCart = (items: Item[], productToRemove: Item) => {
  const newItems = removeItem(items, productToRemove)

  return setItems(newItems)
}

export const clearItemFromCart = (items: Item[], productToClear: Item) => {
  const newItems = clearItem(items, productToClear)

  return setItems(newItems)
}
