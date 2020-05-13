import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistconfig = {
	key: 'root',
	storage,
	whitelist: ['cart'], // because user is storage outsitde
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
});

export default persistReducer(persistconfig, rootReducer);
