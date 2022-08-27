import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

const Category = ({ category: { title, image } }) => {
  return (
    <div className={styles.category}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.container}>
        <p>{title}</p>
        <Link to={`shop/${title}`}>Shop Now</Link>
      </div>
    </div>
  )
}

export default Category
