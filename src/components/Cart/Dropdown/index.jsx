import { useContext } from 'react'

import { CartContext } from '../../../contexts/cart.context'

import Button from '../../Button'
import Item from '../Item'

import styles from './styles.module.scss'

const Dropdown = () => {
  const { items } = useContext(CartContext)

  return (
    <div className={styles.dropdown}>
      {items.length ? (
        <div className={styles.container}>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <span>Empty</span>
      )}
      <Button>Go to Checkout</Button>
    </div>
  )
}

export default Dropdown
