import { useDispatch, useSelector } from 'react-redux'

import { ReactComponent as Icon } from '../../assets/bag-icon.svg'

import { selectIsCartOpen, selectCount } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'

import styles from './styles.module.scss'

const Cart = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <div className={styles.cart} onClick={toggleIsCartOpen}>
      <Icon className={styles.icon}></Icon>
      <span>{count}</span>
    </div>
  )
}

export default Cart
