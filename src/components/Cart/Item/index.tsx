import React, { FC } from 'react'

import { Item as TItem } from '../../../store/cart/cart.types'

import styles from './styles.module.scss'

type ItemProps = {
  item: TItem
}

const Item: FC<ItemProps> = ({ item }) => {
  const { name, image, price, quantity } = item

  return (
    <div className={styles.item}>
      <img src={image} alt={`${name}`} />
      <div className={styles.container}>
        <p>{name}</p>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
}

export default Item
