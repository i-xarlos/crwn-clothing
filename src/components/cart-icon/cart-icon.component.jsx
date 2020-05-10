import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/svg/shopping-bag.svg';
import './cart-icon.styles.scss';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { toogleCartHidden } from '../../redux/cart/cart.actions.js';

function CartIcon({ doToogleCartHidden, itemCount }) {
	return (
		<div className="cart-icon" onClick={doToogleCartHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemCount}</span>
		</div>
	);
}

const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
	doToogleCartHidden: () => dispatch(toogleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
