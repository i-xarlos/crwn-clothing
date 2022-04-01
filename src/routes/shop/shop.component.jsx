import { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { fetchCollectionsStart } from '../../state/shop/shop.actions'
import { connect } from 'react-redux'

import CollectionPageContainer from '../collection/collection.container'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import { ProductContext } from '../../context/product.context'

const ShopPage = props => {
  useEffect(() => {
    const { doFetchCollectionsStart } = props
    doFetchCollectionsStart()
  }, [])
  const { products } = useContext(ProductContext)
  console.log('products', products)

  return (
    <Routes className='shop-page'>
      <Route path={`shop`} element={<CollectionsOverviewContainer />} />
      <Route
        path={`shop/:collectionId`}
        element={<CollectionPageContainer />}
      />
    </Routes>
  )
}

const mapDispatchToProps = dispatch => ({
  doFetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(ShopPage)
