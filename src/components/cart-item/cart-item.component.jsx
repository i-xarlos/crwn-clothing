import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from './cart-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer alt='CartItem'>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <h2>{name}</h2>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default CartItem
