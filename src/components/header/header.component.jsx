import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/svg/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

function Header({ currentUser, hidden }) {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>

			<div className="options">
				<Link className="option" to="/">
					Home
				</Link>
				<Link className="option" to="/shop">
					Shop
				</Link>
				<Link className="option" to="/contact">
					Contact
				</Link>
				{currentUser ? (
					<React.Fragment>
						<div className="option">
							Hi!, {currentUser.displayName}
						</div>
						<div className="option" onClick={() => auth.signOut()}>
							sign out
						</div>
					</React.Fragment>
				) : (
					<Link className="option" to="/sign">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden || <CartDropdown />}
		</div>
	);
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
});

export default connect(mapStateToProps)(Header);
