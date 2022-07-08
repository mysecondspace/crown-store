import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import styles from './styles.module.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

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
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
