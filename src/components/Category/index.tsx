import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Collection } from '../Collections'

import styles from './styles.module.scss'

type CategoryProps = {
  category: Collection
}

const Category: FC<CategoryProps> = ({ category }) => {
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
