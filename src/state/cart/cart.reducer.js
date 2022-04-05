import type from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const initialState = {
	hidden: true,
	cartItems: [],
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case type.TOOGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case type.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case type.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			};
		case type.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(cartItem) => cartItem.id !== action.payload.id,
				),
			};

		default:
			return state;
	}
};

export default cartReducer;
