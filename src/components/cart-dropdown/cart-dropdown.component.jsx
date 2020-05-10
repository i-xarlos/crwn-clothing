import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

function CartDropdown({ cartItems }) {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
			</div>
			<CustomButton>Go to Checkout</CustomButton>
		</div>
	);
}

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
