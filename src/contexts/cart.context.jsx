import { createContext, useState, useEffect } from 'react'

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
  isCartOpen: false,
  setIsCartOpen: () => {},
  items: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  count: 0,
  total: 0,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [items, setItems] = useState([])
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const newCount = items.reduce((total, item) => total + item.quantity, 0)

    setCount(newCount)
  }, [items])

  useEffect(() => {
    const newTotal = items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    )

    setTotal(newTotal)
  }, [items])

  const addItemToCart = (productToAdd) => {
    setItems(addItem(items, productToAdd))
  }

  const removeItemFromCart = (productToRemove) => {
    setItems(removeItem(items, productToRemove))
  }

  const clearItemFromCart = (productToClear) => {
    setItems(clearItem(items, productToClear))
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
