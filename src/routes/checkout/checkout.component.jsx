import { useContext } from 'react'

import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import { CartContext } from '../../context/cart.context'

function CheckoutPage() {
  const { cartItems, price } = useContext(CartContext)

  return (
    <div className='checkout-page'>
      <header className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </header>

      {cartItems.map(item => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}

      <footer className='footer'>
        {price && <StripeCheckoutButton price={price} />}
        <span className='total'>${price}</span>
      </footer>

      {price && (
        <div className='test-warning'>
          * Please use the following tes credit card for payments *
          <br />
          4242 4242 4242 4242 - Exp: 01/21
        </div>
      )}
    </div>
  )
}

export default CheckoutPage
