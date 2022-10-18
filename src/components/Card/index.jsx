import { useDispatch, useSelector } from 'react-redux'

import { addItemToCart } from '../../store/cart/cart.action'
import { selectItems } from '../../store/cart/cart.selector'

import Button, { BUTTON_TYPES_CLASSES } from '../Button'

import styles from './styles.module.scss'

const Card = ({ product }) => {
  const dispatch = useDispatch()
  const { name, price, image } = product
  const items = useSelector(selectItems)
  const addProductToCard = () => dispatch(addItemToCart(items, product))

  return (
    <div className={styles.card}>
      <img src={image} alt={`${name}`} />
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>${price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.reversed}
        onClick={addProductToCard}
      >
        Add to card
      </Button>
    </div>
  )
}

export default Card
