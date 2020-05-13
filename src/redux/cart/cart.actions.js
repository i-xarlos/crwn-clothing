import type from './cart.types';

export const toogleCartHidden = () => ({
	type: type.TOOGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
	type: type.ADD_ITEM,
	payload: item,
});

export const removeItem = (item) => ({
	type: type.REMOVE_ITEM,
	payload: item,
});

export const clearItemFromCart = (item) => ({
	type: type.CLEAR_ITEM_FROM_CART,
	payload: item,
});
