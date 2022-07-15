import { useContext } from 'react'

import { ProductContext } from '../../contexts/products.context'

import Card from '../../components/Card'

import styles from './styles.module.scss'

const Shop = () => {
  const { products } = useContext(ProductContext)

  return (
    <div className={styles.shop}>
      {products.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  )
}

export default Shop
