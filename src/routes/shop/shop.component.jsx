import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { fetchCollectionsStart } from '../../store/product/product.actions'
import { useDispatch } from 'react-redux'

import Category from '../category/category.component'
import CategoryPreview from '../../components/category-preview/category-preview.component'

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
