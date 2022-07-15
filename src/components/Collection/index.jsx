import React from 'react'

import Category from '../Category'

import styles from './styles.module.scss'

const Collection = ({ categories }) => {
  return (
    <div className={styles.collection}>
      {categories.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </div>
  )
}

export default Collection
