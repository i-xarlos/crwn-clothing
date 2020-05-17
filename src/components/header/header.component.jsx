import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/svg/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
//import './header.styles.scss';
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from './header.styles';

function Header({ currentUser, hidden }) {
	return (
		<HeaderContainer alt="Header">
			<LogoContainer to="/">
				<Logo />
			</LogoContainer>

			<OptionsContainer alt="OpitionsContainer">
				<OptionLink to="/">Home</OptionLink>
				<OptionLink to="/shop">Shop</OptionLink>
				<OptionLink to="/contact">Contact</OptionLink>

				{currentUser ? (
					<React.Fragment>
						<OptionLink as="div">
							Hi!, {currentUser.displayName}
						</OptionLink>
						<OptionLink as="div" onClick={() => auth.signOut()}>
							sign out
						</OptionLink>
					</React.Fragment>
				) : (
					<OptionLink to="/sign">SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden || <CartDropdown />}
		</HeaderContainer>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
