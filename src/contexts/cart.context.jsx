import { createContext, useState } from 'react'

const addItem = (items, productToAdd) => {
  const existingItem = items.find((item) => item.id === productToAdd.id)

  if (existingItem) {
    return items.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  }

  return [...items, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  items: [],
  addItemToCart: () => {},
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [items, setItems] = useState([])

  const addItemToCart = (productToAdd) => {
    setItems(addItem(items, productToAdd))
  }

  const value = { isCartOpen, setIsCartOpen, addItemToCart, items }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
