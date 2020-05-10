import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';

function CartDropdown({ cartItems, history }) {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((item) => (
						<CartItem key={item.id} item={item} />
					))
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>
			{!cartItems.length || (
				<CustomButton onClick={() => history.push('/checkout')}>
					Go to Checkout
				</CustomButton>
			)}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
