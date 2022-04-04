import React, { useContext } from 'react'
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './cart-icon.styles'
import { createStructuredSelector } from 'reselect'
import { selectCartItemsCount } from '../../state/cart/cart.selectors'
import { connect } from 'react-redux'
import { toogleCartHidden } from '../../state/cart/cart.actions.js'
import { CartContext } from '../../context/cart.context'

function CartIcon() {
  const { setIsCartOpen, isCartOpen, total } = useContext(CartContext)

  const toogleCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  }
  return (
    <CartContainer alt='CartIcon' onClick={toogleCartOpen}>
      <ShoppingIcon />
      <ItemCountContainer>{total}</ItemCountContainer>
    </CartContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
})

const mapDispatchToProps = dispatch => ({
  doToogleCartHidden: () => dispatch(toogleCartHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
