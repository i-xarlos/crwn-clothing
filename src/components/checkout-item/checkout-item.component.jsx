import { useDispatch } from 'react-redux'
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../state/cart/cart.actions'
import './checkout-item.styles.scss'

function CheckoutItem({ cartItem }) {
  const dispatch = useDispatch()

  const { imageUrl, name, quantity, price } = cartItem
  return (
    <div className='checkout-item'>
      <figure className='image-container'>
        <img src={imageUrl} alt={name} />
      </figure>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => dispatch(removeItem(cartItem))}>
          &#10092;
        </div>
        {quantity}
        <div className='arrow' onClick={() => dispatch(addItem(cartItem))}>
          &#10093;
        </div>
      </span>
      <span className='price'>${price}</span>

      <div
        className='remove-button'
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
