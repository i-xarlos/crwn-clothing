import rootReducer from './root-reducer'
import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
//import thunk from 'redux-thunk';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import { fetchCollectionsStart } from './product/product.sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger)
}

const composedEnhancers = compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, undefined, composedEnhancers)

sagaMiddleware.run(fetchCollectionsStart)

export const persistor = persistStore(store)

const state = { store, persistor }

export default state
