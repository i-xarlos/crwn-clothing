import React from 'react';
import './checkout-item.styles.scss';

function CheckoutItem({ cartItem: { imageUrl, name, quantity, price } }) {
	return (
		<div className="checkout-item">
			<figure className="image-container">
				<img src={imageUrl} alt={name} />
			</figure>
			<span className="name">{name}</span>
			<span className="quantity">{quantity}</span>
			<span className="price">{price}</span>

			<div className="remove-button">&#10005;</div>
		</div>
	);
}
export default CheckoutItem;
