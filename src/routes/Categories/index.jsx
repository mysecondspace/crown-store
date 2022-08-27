import { useContext } from 'react'

import { CategoriesContext } from '../../contexts/categories.context'

import Preview from '../../components/Preview'

import styles from './styles.module.scss'

const Categories = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <div className={styles.categories}>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]

        return <Preview key={title} title={title} products={products} />
      })}
    </div>
  )
}

export default Categories
