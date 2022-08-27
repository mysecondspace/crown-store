import { Link } from 'react-router-dom'

import Card from '../Card'

import styles from './styles.module.scss'

const Preview = ({ title, products }) => {
  return (
    <div className={styles.preview}>
      <Link to={title} className={styles.title}>
        {title.toUpperCase()}
      </Link>
      <div className={styles.container}>
        {products
          .filter((_, idx) => idx < 5)
          .map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default Preview
