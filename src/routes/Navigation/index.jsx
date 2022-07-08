import { Link, Outlet } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import styles from './styles.module.scss'

const Navigation = () => {
  return (
    <>
      <div className={styles.navigation}>
        <Link to='/'>
          <Logo />
        </Link>
        <nav>
          <ul className={styles.container}>
            <Link to='/shop'>Shop</Link>
            <Link to='/auth'>Sign In</Link>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
