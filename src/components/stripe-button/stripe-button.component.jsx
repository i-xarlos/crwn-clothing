import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_ynKoKVdO2LNdu6elM9AL5rbw00z4OqJ1lk';
	const onToken = (token) => {
		console.log(token);
		alert('Payment successfully');
	};
	return (
		<div className="stripe-checkout-button">
			<StripeCheckout
				name={'</ixarlos>'}
				label="Payment"
				billingAddress
				shippingAddress
				image="https://sendeyo.com/up/d/f3eb2117da"
				description={`Your total is $${price}`}
				amount={priceForStripe}
				panelLabel={'Pay now'}
				token={onToken}
				stripeKey={publishableKey}
			/>
		</div>
	);
};

export default StripeCheckoutButton;
