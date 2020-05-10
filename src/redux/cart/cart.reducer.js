import * as type from './cart.types';

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
				cartItems: [...state.cartItems, action.payload],
			};
		default:
			return state;
	}
};

export default cartReducer;
