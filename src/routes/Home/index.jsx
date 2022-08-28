import React from 'react'
import { Outlet } from 'react-router-dom'

import Collections from '../../components/Collections'

const Home = () => {
  return (
    <>
      <Collections />
      <Outlet />
    </>
  )
}

export default Home
