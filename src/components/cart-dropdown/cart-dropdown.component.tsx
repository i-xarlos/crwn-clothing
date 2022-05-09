import { useCallback } from 'react'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selectors'
import { toggleCartHidden } from '../../store/cart/cart.actions'
import './cart-dropdown.styles.scss'

function CartDropdown() {
  const navigate = useNavigate()
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const goToCheckOutHandler = useCallback(() => {
    dispatch(toggleCartHidden())
    navigate('/checkout')
  }, [navigate, dispatch])

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
        <Button onClick={goToCheckOutHandler}>Go to Checkout</Button>
      )}
    </div>
  )
}

export default CartDropdown
