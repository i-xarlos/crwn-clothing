import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import categoryReducer from './category/category.reducer'
import productReducer from './product/product.reducer'

const persistconfig = {
	key: 'root',
	storage,
	blacklist: ['user'], // because user is storage outsitde
}

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	category: categoryReducer,
	product: productReducer,
})

export default persistReducer(persistconfig, rootReducer)