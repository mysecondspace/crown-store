import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

import { signOutStart } from '../../store/user/user.action'
import { selectCurrentUser } from '../../store/user/user.selector'
import { selectIsCartOpen } from '../../store/cart/cart.selector'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import Dropdown from '../../components/Cart/Dropdown'
import Cart from '../../components/Cart'

import styles from './styles.module.scss'

const Navigation = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

  const signOutUser = () => dispatch(signOutStart())

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
