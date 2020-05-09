import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import { signInWidthGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;
		return (
			<div className="sign-in">
				<h2>I have already and account</h2>
				<span>Sign in width your emnail and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						onChange={this.handleChange}
						value={email}
						label="email"
						required
					/>

					<FormInput
						name="password"
						onChange={this.handleChange}
						value={password}
						label="password"
						required
					/>
					<footer className="buttons">
						<CustomButton type="submit">Sign In </CustomButton>
						<CustomButton
							onClick={signInWidthGoogle}
							isGoogleSignIn
						>
							Sign In with Google
						</CustomButton>
					</footer>
				</form>
			</div>
		);
	}
}
