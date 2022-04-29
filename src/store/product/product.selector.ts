import { createSelector } from 'reselect'
import { RootState } from '../root-reducer'
import { ProductState } from './product.reducer'
import { Product, ProductMap } from './product.types'

const selectProduct = (state: RootState): ProductState => state.product

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
)

export const selectCollection = (collectionUrlParam: string) => {
  return createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam] || [] as Product[]
  )
}

export const selectIsCollectionLoading = createSelector(
  [selectProduct],
  product => product.isLoading
)
