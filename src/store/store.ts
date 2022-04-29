import rootReducer from './root-reducer'
import { compose, createStore, applyMiddleware, Middleware } from 'redux'

import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './root-saga'
import LoggerMiddleware from '../utils/middleware/logger.middleware'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const sagaMiddleware = createSagaMiddleware()

const middlewares: Middleware[] = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(LoggerMiddleware)
}

const composeEnhancer =
  (process.env.NODE_ENV === 'development' &&
    window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

const state = { store, persistor }

export default state
