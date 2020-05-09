import React from 'react';
import './sign-in-out.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

export default function SignInOutPage() {
	return (
		<div className="sign-in-out">
			<SignIn />
			<SignUp />
		</div>
	);
}
