import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cart.action'
import { selectItems } from '../../store/cart/cart.selector'
import { Item as TItem } from '../../store/cart/cart.types'

import styles from './styles.module.scss'

type ItemProps = {
  item: TItem
}

const Item: FC<ItemProps> = ({ item }) => {
  const dispatch = useDispatch()
  const items = useSelector(selectItems)
  const { name, image, quantity, price } = item

  const addItemHandler = () => dispatch(addItemToCart(items, item))
  const removeItemHandler = () => dispatch(removeItemFromCart(items, item))
  const clearItemHandler = () => dispatch(clearItemFromCart(items, item))

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
