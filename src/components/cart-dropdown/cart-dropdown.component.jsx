//import { useContext } from 'react'
import './cart-dropdown.styles.scss'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selectors'
import { toggleCartHidden } from '../../store/cart/cart.actions'

function CartDropdown() {
  const navigate = useNavigate()
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      {!cartItems.length || (
        <Button
          onClick={() => {
            dispatch(toggleCartHidden())
            navigate('/checkout')
          }}
        >
          Go to Checkout
        </Button>
      )}
    </div>
  )
}

export default CartDropdown
