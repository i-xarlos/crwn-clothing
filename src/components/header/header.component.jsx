import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/crown.svg';
import './header.styles.scss';

export default function Header() {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>

			<div className="options">
				<Link className="option" to="/shop">
					Shop
				</Link>
				<Link className="option" to="/contact">
					Contact
				</Link>
				<Link className="option" to="/sign">
					SIGN IN
				</Link>
			</div>
		</div>
	);
}
