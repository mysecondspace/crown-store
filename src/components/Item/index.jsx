import React from 'react'
import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import styles from './styles.module.scss'

const Item = ({ item }) => {
  const { name, image, quantity, price } = item

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext)

  const addItemHandler = () => addItemToCart(item)
  const removeItemHandler = () => removeItemFromCart(item)
  const clearItemHandler = () => clearItemFromCart(item)

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={image} alt={`${name}`} />
      </div>
      <p className={styles.name}>{name}</p>
      <div className={styles.quantity}>
        <span className={styles.arrow} onClick={removeItemHandler}>
          &#10094;
        </span>
        <span className={styles.value}>{quantity}</span>
        <span className={styles.arrow} onClick={addItemHandler}>
          &#10095;
        </span>
      </div>
      <span className={styles.price}>${price}</span>
      <span className={styles.clear} onClick={clearItemHandler}>
        &#10005;
      </span>
    </div>
  )
}

export default Item
