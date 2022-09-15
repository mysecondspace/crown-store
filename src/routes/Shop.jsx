import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { getCollectionAndDocuments } from '../utils/firebase/firebase.utils'
import { setCategoriesMap } from '../store/categories/category.action'

import Categories from './Categories'
import Category from './Category'

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionAndDocuments('categories')

      dispatch(setCategoriesMap(categoryMap))
    }

    getCategoriesMap()
  }, [])

  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop
