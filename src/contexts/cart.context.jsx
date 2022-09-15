import { createContext, useReducer } from 'react'

import { createAction } from '../utils/reducer/reducer.utils'

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

export const CartContext = createContext({
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
})

const CART_ACTION_TYPES = {
  SET_ITEMS: 'SET_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const INITIAL_STATE = {
  isCartOpen: false,
  items: [],
  count: 0,
  total: 0,
}

const cartReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTION_TYPES.SET_ITEMS:
      return {
        ...state,
        ...payload,
      }

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      }
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`)
  }
}

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, items, count, total }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  )

  const updateItemsReducer = (newItems) => {
    const newCount = newItems.reduce((total, item) => total + item.quantity, 0)

    const newTotal = newItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    )

    dispatch(
      createAction(CART_ACTION_TYPES.SET_ITEMS, {
        items: newItems,
        total: newTotal,
        count: newCount,
      })
    )
  }

  const addItemToCart = (productToAdd) => {
    const newItems = addItem(items, productToAdd)

    updateItemsReducer(newItems)
  }

  const removeItemFromCart = (productToRemove) => {
    const newItems = removeItem(items, productToRemove)

    updateItemsReducer(newItems)
  }

  const clearItemFromCart = (productToClear) => {
    const newItems = clearItem(items, productToClear)

    updateItemsReducer(newItems)
  }

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    items,
    count,
    total,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
