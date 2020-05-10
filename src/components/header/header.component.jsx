import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/svg/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

function Header({ currentUser }) {
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
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
