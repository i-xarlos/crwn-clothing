import { call, put, takeLatest, all } from 'typed-redux-saga/macro'
import types from './product.types'
import { getCollectionAndDocuments } from '../../utils/firebase/firebase.utils'

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './product.actions'

export function* fetchCollectionsAsync() {
  try {
    const collectionArray = yield* call(getCollectionAndDocuments, 'categories')
    console.log('collectionArray', collectionArray)
    yield* put(fetchCollectionsSuccess(collectionArray))
  } catch (e) {
    yield* put(fetchCollectionsFailure(e as Error))
  }
}

export function* onFetchCategories() {
  yield* takeLatest(types.FETCH_COLLECTION_START, fetchCollectionsAsync)
}

export function* productsSagas() {
  yield* all([call(onFetchCategories)])
}
