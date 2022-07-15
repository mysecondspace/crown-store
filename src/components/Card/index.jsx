import React from 'react'
import Button from '../Button'

import styles from './styles.module.scss'

const Card = ({ product }) => {
  const { name, price, image } = product

  return (
    <div className={styles.card}>
      <img src={image} alt={`${name}`} />
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>${price}</span>
      </div>
      <Button buttonType='reversed'>Add to card</Button>
    </div>
  )
}

export default Card
