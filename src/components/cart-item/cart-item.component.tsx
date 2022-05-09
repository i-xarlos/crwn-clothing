import { FC, memo } from 'react'
import { CartItem as ICartItem } from '../../store/cart/cart.types'
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from './cart-item.styles'

type CartItemProps = {
  item: ICartItem
}

const CartItem: FC<CartItemProps> = memo(
  ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer title='CartItem'>
      <CartItemImage src={imageUrl} alt='item' />
      <ItemDetailsContainer>
        <h2>{name}</h2>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  )
)
export default CartItem
