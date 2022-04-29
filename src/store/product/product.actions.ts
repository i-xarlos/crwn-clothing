import types, { Product } from './product.types'
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from '../../utils/reducer/reducer.utils'

export type FetchCollectionsStart = Action<types.FETCH_COLLECTION_START>

export type FetchCollectionsSuccess = ActionWithPayload<
  types.FETCH_COLLECTION_SUCCESS,
  Product[]
>

export type FetchCollectionsFailure = ActionWithPayload<
  types.FETCH_COLLECTION_FAILURE,
  Error
>

export const fetchCollectionsStart = withMatcher(
  (): FetchCollectionsStart => createAction(types.FETCH_COLLECTION_START)
)

export const fetchCollectionsSuccess = withMatcher(
  (collection: Product[]): FetchCollectionsSuccess =>
    createAction(types.FETCH_COLLECTION_SUCCESS, collection)
)

export const fetchCollectionsFailure = withMatcher(
  (errorMessage: Error): FetchCollectionsFailure =>
    createAction(types.FETCH_COLLECTION_FAILURE, errorMessage)
)

//export type ProductAction =
//| FetchCollectionsStart
//| FetchCollectionsSuccess
//| FetchCollectionsFailure
