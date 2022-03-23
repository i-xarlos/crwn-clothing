import rootReducer from './root-reducer';
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
//import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sgagaMiddleware = createSagaMiddleware();

const middlewares = [sgagaMiddleware];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistor };
