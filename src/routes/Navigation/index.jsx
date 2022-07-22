import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import Cart from '../../components/Cart'
import Dropdown from '../../components/Cart/Dropdown'

import styles from './styles.module.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <div className={styles.navigation}>
        <Link to='/'>
          <Logo />
        </Link>
        <nav>
          <ul className={styles.container}>
            <Link to='/shop' className={styles.link}>
              Shop
            </Link>
            {currentUser ? (
              <span className={styles.link} onClick={signOutUser}>
                Sign out
              </span>
            ) : (
              <Link to='/auth' className={styles.link}>
                Sign in
              </Link>
            )}
            <Cart />
          </ul>
        </nav>
        {isCartOpen && <Dropdown />}
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
