import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './cart-icon.styles'
import { selectCartItemsCount } from '../../state/cart/cart.selectors'
import { useDispatch, useSelector } from 'react-redux'
import { toogleCartHidden } from '../../state/cart/cart.actions.js'

function CartIcon() {
  const total = useSelector(selectCartItemsCount)
  const dispatch = useDispatch()

  return (
    <CartContainer alt='CartIcon' onClick={() => dispatch(toogleCartHidden())}>
      <ShoppingIcon />
      <ItemCountContainer>{total}</ItemCountContainer>
    </CartContainer>
  )
}

export default CartIcon
