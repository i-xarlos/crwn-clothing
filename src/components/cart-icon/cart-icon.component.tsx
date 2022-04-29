import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './cart-icon.styles'
import { selectCartItemsCount } from '../../store/cart/cart.selectors'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCartHidden } from '../../store/cart/cart.actions'

function CartIcon() {
  const total = useSelector(selectCartItemsCount)
  const dispatch = useDispatch()

  return (
    <CartContainer
      title='CartIcon'
      onClick={() => dispatch(toggleCartHidden())}
    >
      <ShoppingIcon />
      <ItemCountContainer>{total}</ItemCountContainer>
    </CartContainer>
  )
}

export default CartIcon
