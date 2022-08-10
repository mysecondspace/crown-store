import React from 'react'
import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import Item from '../../components/Item'

import styles from './styles.module.scss'

const Checkout = () => {
  const { items, total } = useContext(CartContext)

  return (
    <div className={styles.checkout}>
      <div className={styles.header}>
        <div>
          <span>Product</span>
        </div>
        <div>
          <span>Description</span>
        </div>
        <div>
          <span>Quantity</span>
        </div>
        <div>
          <span>Price</span>
        </div>
        <div>
          <span>Remove</span>
        </div>
      </div>
      {items.map((item) => (
        <>
          <Item item={item} key={item.id} />
        </>
      ))}
      <span className={styles.total}>Total: ${total}</span>
    </div>
  )
}

export default Checkout
