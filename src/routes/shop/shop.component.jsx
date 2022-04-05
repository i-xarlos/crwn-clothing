import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { fetchCollectionsStart } from '../../state/shop/shop.actions'
import { connect } from 'react-redux'

import Category from '../categories/categories.component'
import CategoryPreview from '../../components/category-preview/category-preview.container'

const ShopPage = props => {
  useEffect(() => {
    const { doFetchCollectionsStart } = props
    doFetchCollectionsStart()
  }, [props])

  return (
    <Routes className='shop-page'>
      <Route index element={<CategoryPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

const mapDispatchToProps = dispatch => ({
  doFetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(ShopPage)
