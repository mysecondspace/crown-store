import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { selectItems } from '../../../store/cart/cart.selector'

import Button from '../../Button'
import Item from '../Item'

import styles from './styles.module.scss'

const Dropdown = () => {
  const items = useSelector(selectItems)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className={styles.dropdown}>
      {items.length ? (
        <div className={styles.container}>
          {items.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <span className={styles.empty}>Your cart is empty</span>
      )}
      <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
    </div>
  )
}

export default Dropdown
