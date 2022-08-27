import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CategoriesContext } from '../../contexts/categories.context'

import Card from '../../components/Card'

import styles from './styles.module.scss'

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <h2 className={styles.title}>{category.toUpperCase()}</h2>
      <div className={styles.category}>
        {products &&
          products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
    </>
  )
}

export default Category
