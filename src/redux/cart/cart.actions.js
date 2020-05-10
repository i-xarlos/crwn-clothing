import * as type from './cart.types';

export const toogleCartHidden = () => ({
	type: type.TOOGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
	type: type.ADD_ITEM,
	payload: item,
});
