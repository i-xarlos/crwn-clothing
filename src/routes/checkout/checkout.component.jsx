import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import PaymentForm from '../../components/payment-form/payment-form.component'
import { useSelector } from 'react-redux'
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selectors'
import './checkout.styles.scss'

function CheckoutPage() {
  const cartItems = useSelector(selectCartItems)
  const price = useSelector(selectCartTotal)

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
        <span className='total'>${price}</span>
      </footer>

      {price && <PaymentForm price={price} />}

      {price && (
        <div className='test-warning'>
          * Please use the following tes credit card for payments *
          <br />
          4242 4242 4242 4242 - Exp: 01/29 code: 123 zip: 12345
        </div>
      )}
    </div>
  )
}

export default CheckoutPage
