import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import './checkout-item.styles.scss'

function CheckoutItem({ cartItem }) {
  const { removeItemFromCard, addItemToCard, clearCardItem } =
    useContext(CartContext)
  const { imageUrl, name, quantity, price } = cartItem
  return (
    <div className='checkout-item'>
      <figure className='image-container'>
        <img src={imageUrl} alt={name} />
      </figure>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItemFromCard(cartItem)}>
          &#10092;
        </div>
        {quantity}
        <div className='arrow' onClick={() => addItemToCard(cartItem)}>
          &#10093;
        </div>
      </span>
      <span className='price'>${price}</span>

      <div className='remove-button' onClick={() => clearCardItem(cartItem)}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
