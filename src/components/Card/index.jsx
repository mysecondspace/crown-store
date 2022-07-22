import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import Button from '../Button'

import styles from './styles.module.scss'

const Card = ({ product }) => {
  const { name, price, image } = product
  const { addItemToCart } = useContext(CartContext)
  const addProductToCard = () => addItemToCart(product)

  return (
    <div className={styles.card}>
      <img src={image} alt={`${name}`} />
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>${price}</span>
      </div>
      <Button buttonType='reversed' onClick={addProductToCard}>
        Add to card
      </Button>
    </div>
  )
}

export default Card
