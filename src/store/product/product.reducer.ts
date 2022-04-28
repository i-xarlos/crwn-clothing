import { Product } from './product.types'
import {
  fetchCollectionsFailure,
  fetchCollectionsStart,
  fetchCollectionsSuccess,
} from './product.actions'
import { AnyAction } from 'redux'

export type ProductState = {
  readonly collections: Product[]
  readonly isLoading: boolean
  readonly errorMessage: Error | null
}

export const initialState: ProductState = {
  collections: [],
  isLoading: false,
  errorMessage: null,
}

const shopReducer = (
  state = initialState,
  action = {} as AnyAction
): ProductState => {
  if (fetchCollectionsStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (fetchCollectionsSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      collections: action.payload,
    }
  }

  if (fetchCollectionsFailure.match(action)) {
    return {
      ...state,
      isLoading: false,
      errorMessage: action.payload,
    }
  }
  return state
}

export default shopReducer
