import { createSelector } from 'reselect'
import { ProductState } from './product.reducer'
import { Product, ProductMap } from './product.types'

const selectProduct = (state: any): ProductState => state.product

export const selectCollections = createSelector([selectProduct], product =>
  product.collections.reduce((acc, collection) => {
    const { title, items } = collection
    acc[title.toLowerCase()] = items
    return acc
  }, {} as ProductMap)
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    Object.keys(collections).map(key => ({
      items: collections[key],
      title: key,
    }))
  //: [{ item: [], title: '' }]
)

export const selectCollection = (collectionUrlParam: string) => {
  return createSelector(
    [selectCollections],
    (collections: any): Product =>
      collections[collectionUrlParam] || ([] as Product[])
  )
}

export const selectIsCollectionLoading = createSelector(
  [selectProduct],
  product => product.isLoading
)
