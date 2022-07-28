import React from 'react'

import styles from './styles.module.scss'

const Item = ({ item }) => {
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
