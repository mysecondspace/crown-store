import React from 'react'

import Collections from '../../components/Collections'

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      image: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      image: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      image: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      image: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      image: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ]

  return (
    <>
      <Collections categories={categories} />
    </>
  )
}

export default Home
