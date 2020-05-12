import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

function CheckoutPage({ cartItems, total }) {
	return (
		<div className="checkout-page">
			<header className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</header>

			{cartItems.map((item) => (
				<CheckoutItem key={item.id} cartItem={item} />
			))}

			<footer className="total">${total}</footer>
		</div>
	);
}

const mapStatetoProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStatetoProps)(CheckoutPage);
