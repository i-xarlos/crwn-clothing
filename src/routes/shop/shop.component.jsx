import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { fetchCollectionsStart } from '../../state/product/product.actions'
import { useDispatch } from 'react-redux'

import Category from '../categories/categories.component'
import CategoryPreview from '../../components/category-preview/category-preview.container'

const ShopPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCollectionsStart())
  }, [dispatch])

  return (
    <Routes className='shop-page'>
      <Route index element={<CategoryPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default ShopPage
