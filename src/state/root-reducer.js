import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import categoryReducer from './category/category.reducer'
import shopReducer from './shop/shop.reducer'

const persistconfig = {
	key: 'root',
	storage,
	whitelist: ['cart'], // because user is storage outsitde
}

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	category: categoryReducer,
	shop: shopReducer,
})

export default persistReducer(persistconfig, rootReducer)
