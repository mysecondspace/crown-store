import React from 'react'
import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

const Checkout = () => {
  const { items, addItemToCart } = useContext(CartContext)

  return (
    <div>
      {items.length ? (
        <>
          <h1>I'm the checkout page</h1>
          {items.map((item) => {
            const { name, quantity } = items

            return (
              <>
                <h2>{name}</h2>
                <p>{quantity}</p>
                <span>Decrement</span>
                <span onClick={() => addItemToCart(item)}>Increment</span>
              </>
            )
          })}
        </>
      ) : (
        <span></span>
      )}
    </div>
  )
}

export default Checkout
