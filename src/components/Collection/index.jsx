import React from 'react'

import Card from '../Card'

import styles from './styles.module.scss'

const Collection = ({ categories }) => {
  return (
    <div className={styles.collection}>
      {categories.map((category) => (
        <Card category={category} key={category.id} />
      ))}
    </div>
  )
}

export default Collection
