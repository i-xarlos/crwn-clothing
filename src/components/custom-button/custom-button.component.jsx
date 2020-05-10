import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({
	children,
	isGoogleSignIn,
	isInverted,
	...otherProps
}) => {
	return (
		<button
			className={`
				${isGoogleSignIn ? 'google-sign-in' : ''}
				${isInverted ? 'inverted' : ''}
				custom-button`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
