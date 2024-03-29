import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { fetchCategoriesStart } from '../store/categories/category.action'

import Categories from './Categories'
import Category from './Category'

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  }, [dispatch])

  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop
