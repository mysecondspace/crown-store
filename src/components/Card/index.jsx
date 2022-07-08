import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

const Card = ({ category: { title, image } }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.container}>
        <p>{title}</p>
        <Link to='shop'>Shop Now</Link>
      </div>
    </div>
  )
}

export default Card
