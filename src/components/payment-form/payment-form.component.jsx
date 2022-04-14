import React, { useState } from 'react'
//import StripeCheckout from 'react-stripe-checkout'
import { BUTTON_TYPE_CLASES } from '../button/button.component'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Button from '../button/button.component'

import { PaymentFormContainer, FormContainer } from './payment-form.style.js'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selectors'

const PaymentForm = ({ price }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const currentUser = useSelector(selectCurrentUser)

  const paymentHandler = async e => {
    e.preventDefault()

    if (!stripe || !elements) return
    setIsProcessingPayment(true)
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: price * 100, currency: 'usd' }),
    }).then(res => res.json())

    const {
      paymentIntent: { client_secret },
    } = response

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: currentUser?.displayName || 'Guest',
      },
    })
    setIsProcessingPayment(false)
    if (paymentResult.error) {
      alert(paymentResult.error.message)
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment successfully!')
      }
    }
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button
          buttonType={BUTTON_TYPE_CLASES.inverted}
          isLoading={isProcessingPayment}
        >
          Pay now
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  )
  //const priceForStripe = price * 100
  //const publishableKey = 'pk_test_ynKoKVdO2LNdu6elM9AL5rbw00z4OqJ1lk'
  //const onToken = token => {
  //console.log(token)
  //alert('Payment successfully')
  //}
  //return (
  //<div className='stripe-checkout-button'>
  //<StripeCheckout
  //name={'</ixarlos>'}
  //label='Payment'
  //billingAddress
  //shippingAddress
  //image='https://sendeyo.com/up/d/f3eb2117da'
  //description={`Your total is $${price}`}
  //amount={priceForStripe}
  //panelLabel={'Pay now'}
  //token={onToken}
  //stripeKey={publishableKey}
  ///>
  //</div>
  //)
}

export default PaymentForm
