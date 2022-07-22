import React from 'react'

const Item = ({ item }) => {
  const { name, quantity } = item

  return (
    <>
      <img src='' alt='' />
      <p>{name}</p>
      <span>{quantity}</span>
    </>
  )
}

export default Item
