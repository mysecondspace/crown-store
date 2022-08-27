import React from 'react'

import Category from '../Category'

import styles from './styles.module.scss'

const Collections = ({ categories }) => {
  return (
    <div className={styles.collections}>
      {categories.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </div>
  )
}

export default Collections
