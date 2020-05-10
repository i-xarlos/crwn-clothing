import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWidthGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
	state = {
		email: '',
		password: '',
		message: null,
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (e) {
			console.error(e);
			this.setState({ message: e.message });
		}
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password, message } = this.state;
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
					{message && <span className="message">* {message}</span>}
					<footer className="buttons">
						<CustomButton type="submit">Sign In </CustomButton>
						<CustomButton
							type="button"
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
