import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { getCollectionAndDocuments } from '../utils/firebase/firebase.utils'
import { setCategories } from '../store/categories/category.action'

import Categories from './Categories'
import Category from './Category'

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCollectionAndDocuments('categories')

      dispatch(setCategories(categoriesArray))
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
