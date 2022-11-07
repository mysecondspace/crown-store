import { useSelector } from 'react-redux'

import { selectItems, selectTotal } from '../../store/cart/cart.selector'

import Item from '../../components/Item'
import Payment from '../../components/Payment'

import styles from './styles.module.scss'

const Checkout = () => {
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)

  return (
    <div className={styles.checkout}>
      <div className={styles.header}>
        <div>
          <span>Product</span>
        </div>
        <div>
          <span>Description</span>
        </div>
        <div>
          <span>Quantity</span>
        </div>
        <div>
          <span>Price</span>
        </div>
        <div>
          <span>Remove</span>
        </div>
      </div>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
      <span className={styles.total}>Total: ${total}</span>
      <Payment />
    </div>
  )
}

export default Checkout
