import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './styles.module.scss'

const Category = ({ category }) => {
  const { title, image, route } = category
  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(route)

  return (
    <div className={styles.category}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.container}>
        <p>{title}</p>
        <span onClick={onNavigateHandler}>Shop Now</span>
      </div>
    </div>
  )
}

export default Category
