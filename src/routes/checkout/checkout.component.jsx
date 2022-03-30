import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectCartItems,
	selectCartTotal,
} from '../../state/cart/cart.selectors';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

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

			{cartItems.map(item => (
				<CheckoutItem key={item.id} cartItem={item} />
			))}

			<footer className="footer">
				{!total || <StripeCheckoutButton price={total} />}
				<span className="total">${total}</span>
			</footer>

			{!total || (
				<div className="test-warning">
					* Please use the following tes credit card for payments *
					<br />
					4242 4242 4242 4242 - Exp: 01/21
				</div>
			)}
		</div>
	);
}

const mapStatetoProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStatetoProps)(CheckoutPage);
