import React from 'react'
import './cart-dropdown.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router-dom'

import { selectCartItems } from '../../state/cart/cart.selectors'
import { toogleCartHidden } from '../../state/cart/cart.actions'

function CartDropdown({ cartItems, dispatch }) {
  const navigate = useNavigate()
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
        <CustomButton
          onClick={() => {
            navigate('/checkout')
            dispatch(toogleCartHidden())
          }}
        >
          Go to Checkout
        </CustomButton>
      )}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})
export default connect(mapStateToProps)(CartDropdown)
