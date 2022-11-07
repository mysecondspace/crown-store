import { useSelector } from 'react-redux'

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selector'

import Preview from '../../components/Preview'
import Spinner from '../../components/Spinner'

import styles from './styles.module.scss'

const Categories = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.categories}>
          {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title]

            return <Preview key={title} title={title} products={products} />
          })}
        </div>
      )}
    </>
  )
}

export default Categories
