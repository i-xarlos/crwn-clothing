import { combineReducers } from 'redux'
import { PersistConfig, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import categoryReducer from './category/category.reducer'
import productReducer from './product/product.reducer'

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  category: categoryReducer,
  product: productReducer,
})

export type RootState = ReturnType<typeof rootReducer>

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[]
}

const persistconfig: ExtendedPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // only persist
  //blacklist: ['user'], // not persist
}

export default persistReducer(persistconfig, rootReducer)
