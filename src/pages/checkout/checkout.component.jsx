import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

function CheckoutPage({ cartItems, total }) {
	return (
		<div className="checkout-page">
			<header className="checkout-header">
				<div className="header-blocks">
					<span>Product</span>
				</div>
				<div className="header-blocks">
					<span>Product</span>
				</div>
				<div className="header-blocks">
					<span>Description</span>
				</div>
				<div className="header-blocks">
					<span>Quantity</span>
				</div>
				<div className="header-blocks">
					<span>Price</span>
				</div>
				<div className="header-blocks">
					<span>Remove</span>
				</div>
			</header>

			<main>
				{cartItems.map((item) => (
					<h3>{item.name}</h3>
				))}
			</main>

			<footer className="total">${total}</footer>
		</div>
	);
}

const mapStatetoProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStatetoProps)(CheckoutPage);
