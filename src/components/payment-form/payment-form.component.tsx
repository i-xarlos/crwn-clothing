import { FormEvent, useState, FC } from 'react'
//import StripeCheckout from 'react-stripe-checkout'
import { BUTTON_TYPE_CLASES } from '../button/button.component'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Button from '../button/button.component'

import { PaymentFormContainer, FormContainer } from './payment-form.style'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selectors'
import { StripeCardElement } from '@stripe/stripe-js'

type PaymentFormProps = {
  price: number
}

const isValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null

const PaymentForm: FC<PaymentFormProps> = ({ price }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const currentUser = useSelector(selectCurrentUser)

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
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

    const card = elements.getElement(CardElement)

    if (isValidCardElement(card)) {
      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card,
          billing_details: {
            name: currentUser?.displayName || 'Guest',
          },
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
}

export default PaymentForm
