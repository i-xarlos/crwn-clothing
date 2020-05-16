import React from 'react';
import {
	CartContainer,
	ShoppingIcon,
	ItemCountContainer,
} from './cart-icon.styles';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { toogleCartHidden } from '../../redux/cart/cart.actions.js';

function CartIcon({ doToogleCartHidden, itemCount }) {
	return (
		<CartContainer alt="CartIcon" onClick={doToogleCartHidden}>
			<ShoppingIcon />
			<ItemCountContainer>{itemCount}</ItemCountContainer>
		</CartContainer>
	);
}

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
	doToogleCartHidden: () => dispatch(toogleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
