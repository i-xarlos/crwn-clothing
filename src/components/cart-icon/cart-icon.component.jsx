import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/svg/shopping-bag.svg';
import './cart-icon.styles.scss';

import { connect } from 'react-redux';
import { toogleCartHidden } from '../../redux/cart/cart.actions.js';

function CartIcon({ doToogleCartHidden }) {
	return (
		<div className="cart-icon" onClick={doToogleCartHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({
	doToogleCartHidden: () => dispatch(toogleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
