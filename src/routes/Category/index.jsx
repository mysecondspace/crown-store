import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectCategoriesMap } from '../../store/categories/category.selector'

import Card from '../../components/Card'

import styles from './styles.module.scss'

const Category = () => {
  const { category } = useParams()
  const categoriesMap = useSelector(selectCategoriesMap)
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
