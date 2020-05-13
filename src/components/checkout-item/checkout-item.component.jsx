import React from 'react';
import { connect } from 'react-redux';
import {
	clearItemFromCart,
	addItem,
	removeItem,
} from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

function CheckoutItem({
	cartItem,
	doClearItemFromCart,
	doRemoveItem,
	doAddItem,
}) {
	const { imageUrl, name, quantity, price } = cartItem;
	return (
		<div className="checkout-item">
			<figure className="image-container">
				<img src={imageUrl} alt={name} />
			</figure>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => doRemoveItem(cartItem)}>
					&#10092;
				</div>
				{quantity}
				<div className="arrow" onClick={() => doAddItem(cartItem)}>
					&#10093;
				</div>
			</span>
			<span className="price">{price}</span>

			<div
				className="remove-button"
				onClick={() => doClearItemFromCart(cartItem)}
			>
				&#10005;
			</div>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({
	doClearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
	doAddItem: (item) => dispatch(addItem(item)),
	doRemoveItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
