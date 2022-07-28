import { createContext, useState, useEffect } from 'react'

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
  cartCount: 0,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [items, setItems] = useState([])

  useEffect(() => {
    const newCartCount = items.reduce((total, item) => total + item.quantity, 0)

    setCartCount(newCartCount)
  }, [items])

  const addItemToCart = (productToAdd) => {
    setItems(addItem(items, productToAdd))
  }

  const value = { isCartOpen, setIsCartOpen, addItemToCart, items, cartCount }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
