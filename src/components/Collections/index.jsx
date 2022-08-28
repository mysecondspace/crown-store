import React from 'react'

import Category from '../Category'

import styles from './styles.module.scss'

const categories = [
  {
    id: 1,
    title: 'hats',
    image: 'https://i.ibb.co/cvpntL1/hats.png',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    image: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    image: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    image: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    image: 'https://i.ibb.co/R70vBrQ/men.png',
    route: 'shop/mens',
  },
]

const Collections = () => {
  return (
    <div className={styles.collections}>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Collections
