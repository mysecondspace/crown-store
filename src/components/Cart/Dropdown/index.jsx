import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../../contexts/cart.context'

import Button from '../../Button'
import Item from '../Item'

import styles from './styles.module.scss'

const Dropdown = () => {
  const { items } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className={styles.dropdown}>
      {items.length ? (
        <div className={styles.container}>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <span className={styles.empty}>Empty</span>
      )}
      <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
    </div>
  )
}

export default Dropdown
