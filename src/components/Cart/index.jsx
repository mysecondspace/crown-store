import { useContext } from 'react'

import { ReactComponent as Icon } from '../../assets/bag-icon.svg'

import { CartContext } from '../../contexts/cart.context'

import styles from './styles.module.scss'

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div className={styles.cart} onClick={toggleIsCartOpen}>
      <Icon className={styles.icon}></Icon>
      <span>{cartCount}</span>
    </div>
  )
}

export default Cart
